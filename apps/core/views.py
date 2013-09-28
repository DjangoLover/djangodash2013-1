from django.views.generic import TemplateView
from django.core.cache import cache
from django.http import HttpResponse

from social_auth.models import UserSocialAuth

from .shortcuts import get_object_or_none

import foursquare


class SocialUserMixin(object):

    foursquare = None

    def get_social_user(self, provider):
        social_user = get_object_or_none(UserSocialAuth,
                                         user=self.request.user.id,
                                         provider=provider)
        if social_user:
            return social_user.extra_data.get('nickname', None)
        return None


class FriendListView(TemplateView, SocialUserMixin):

    template_name = 'base.html'

    def get(self, request, *args, **kwargs):
        self.foursquare = self.get_social_user('foursquare')
        self.get_access_token(request.user)
        print self.token
        return super(FriendListView, self).get(request, *args, **kwargs)

    def get_context_data(self, **kwargs):
        context = super(FriendListView, self).get_context_data(**kwargs)
        context['friends'] = self.get_friends()
        context['foursquare'] = self.foursquare
        return context

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
                print social_user.extra_data
                access_token = social_user.extra_data.get('access_token')
                expires = social_user.extra_data.get('expires')

                cache.set(key, access_token,
                          int(expires) if expires is not None else 0)
        self.social_user = social_user
        self.token = access_token

    def get_friends(self):
        if self.token:
            client = foursquare.Foursquare(access_token=self.token)
            friends = client.users.friends()
            return friends['friends']['items']
        return None


def update_profile(request):
    lat = request.POST.get('lat', False)
    lng = request.POST.get('lng', False)
    if lat and lng and request.user.is_authenticated:
        request.user.latitude = lat
        request.user.longitude = lng
        request.user.save()
    return HttpResponse('')


def get_venues(request, pk):
    pass
    return HttpResponse('')
