from django.conf.urls.defaults import patterns, url
from .views import FriendListView


urlpatterns = patterns(
    '',
    url(r'^friends/$', FriendListView.as_view(), name='friendlist_view'),
)
