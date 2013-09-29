from django.contrib.auth import logout as auth_logout
from django.http import HttpResponseRedirect


def logout(request):
    back_url = request.META.get('HTTP_REFERER', '/')
    auth_logout(request)
    return HttpResponseRedirect(back_url)
