from django.views.generic import TemplateView
from django.core.cache import cache
from django.http import HttpResponse

from social_auth.models import UserSocialAuth

from .shortcuts import get_object_or_none

from profile.models import Profile

import foursquare
import math


class SocialUserMixin(object):

    token = None

    def get_access_token(self, user):
        key = str(user.id)
        access_token = cache.get(key)

        try:
            social_user = user.social_user if hasattr(user, 'social_user') \
                else UserSocialAuth.objects.get(user=user.id,
                                                provider='foursquare')
        except UserSocialAuth.DoesNotExist:
            social_user = None

        if access_token is None and social_user:
            if social_user.extra_data:
                access_token = social_user.extra_data.get('access_token')
                expires = social_user.extra_data.get('expires')

                cache.set(key, access_token,
                          int(expires) if expires is not None else 0)
        self.token = access_token


class FriendView(TemplateView, SocialUserMixin):

    template_name = 'base.html'

    def get(self, request, *args, **kwargs):
        self.get_access_token(request.user)
        return super(FriendView, self).get(request, *args, **kwargs)

    def get_context_data(self, **kwargs):
        context = super(FriendView, self).get_context_data(**kwargs)
        context['friends'] = self.get_friends()
        return context

    def get_friends(self):
        if self.token:
            client = foursquare.Foursquare(access_token=self.token)
            friends = client.users.friends()
            return friends['friends']['items']
        return None


class VenueView(TemplateView, SocialUserMixin):

    template_name = 'core/venues.html'

    def post(self, request, *args, **kwargs):
        self.get_access_token(request.user)
        return super(VenueView, self).get(request, *args, **kwargs)

    def get_context_data(self, **kwargs):
        context = super(VenueView, self).get_context_data(**kwargs)
        venues = self.get_venues()
        context['venue'] = self.sort_venue(venues)
        context['friend'] = self.friend
        context['last_update'] = self.prepare_date_list(self.friend)
        return context

    def get_venues(self):
        center = self.get_center()
        if self.token and center:
            coords = "{0},{1}".format(center[0], center[1])
            client = foursquare.Foursquare(access_token=self.token)
            venues = client.venues.search(params={
                                          'll': coords,
                                          })

            if self.request.GET.get('unvisited', None):
                for venue, data in venues.items():
                    if data.get('beenHere', None):
                        del venues[venue]
            return venues['venues']
        return None

    def sort_venue(self, data):
        if data:
            d = dict()
            for number, item in enumerate(data):
                d[item['location']['distance']] = number
            keylist = d.keys()
            keylist.sort()
            number = d[keylist[0]]
            return data[number]
        return None

    def get_center(self):
        user_lat = self.request.POST.get('lat', False)
        user_lng = self.request.POST.get('lng', False)
        friend_pk = self.kwargs['pk']
        self.friend = get_object_or_none(Profile, fs_id=friend_pk)
        if self.friend and user_lat and user_lng:
            user_lat = float(user_lat)
            user_lng = float(user_lng)
            friend_lat = float(self.friend.latitude)
            friend_lng = float(self.friend.longitude)
            if user_lat != friend_lat and user_lng != friend_lng:
                center_lat = (math.fabs(friend_lat - user_lat) / 2) + min(friend_lat, user_lat)
                center_lng = (math.fabs(friend_lng - user_lng) / 2) + min(friend_lng, user_lng)
                return [center_lat, center_lng]
        return None

    def prepare_date_list(self, friend):
        if friend:
            date = friend.last_update
            date_list = [
                date.year,
                date.month,
                date.day,
                date.hour,
                date.minute,
                date.second
            ]
            return date_list
        return []


def update_profile(request):
    lat = request.POST.get('lat', False)
    lng = request.POST.get('lng', False)
    if lat and lng and request.user.is_authenticated:
        request.user.latitude = lat
        request.user.longitude = lng
        request.user.save()
    return HttpResponse('')
