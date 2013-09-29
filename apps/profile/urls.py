from django.conf.urls.defaults import url, patterns

urlpatterns = patterns(
    '',
    url(r'^logout/$', 'profile.views.logout', name='auth_logout'),
)
