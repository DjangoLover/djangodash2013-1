from django.conf.urls.defaults import patterns, url
from .views import FriendView, VenueView


urlpatterns = patterns(
    '',
    url(r'^start/$', FriendView.as_view(), name='friendlist_view'),
    url(r'^record/$', 'core.views.update_profile',
        name='coords_update_view'),
    url(r'^venues/(?P<pk>\d+)/$', VenueView.as_view(),
        name='venues_view'),
)
