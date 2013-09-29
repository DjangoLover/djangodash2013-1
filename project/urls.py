from django.conf.urls import patterns, include, url
from django.contrib import admin

admin.autodiscover()


urlpatterns = patterns(
    '',
    url(r'^admin/', include(admin.site.urls)),
    url(r'^profile/', include('profile.urls')),
    url(r'^', include('core.urls')),
    url(r'', include('social_auth.urls')),
)
