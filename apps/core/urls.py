from django.conf.urls.defaults import patterns, url
from .views import FriendListView


urlpatterns = patterns(
    '',
    url(r'^friends/$', FriendListView.as_view(), name='friendlist_view'),
    url(r'^record/$', 'core.views.update_profile',
        name='coords_update_view'),
    url(r'^venues/(?P<pk>\d+)/$', 'core.views.get_venues',
        name='venues_view'),
)
