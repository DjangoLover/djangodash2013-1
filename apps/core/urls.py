from django.conf.urls.defaults import patterns, url
from .views import FriendView, VenueView
from django.views.generic import TemplateView, RedirectView

urlpatterns = patterns(
    '',
    url(r'^start/$', FriendView.as_view(), name='start_view'),
    url(r'^record/$', 'core.views.update_profile',
        name='coords_update_view'),
    url(r'^venues/(?P<pk>\d+)/$', VenueView.as_view(),
        name='venues_view'),
    url(r'^how/$', TemplateView.as_view(template_name="how.html"),
        name='how_view'),
    url(r'^home/$', TemplateView.as_view(template_name="home.html")),
    url(r'^$', RedirectView.as_view(url="home/")),
)
