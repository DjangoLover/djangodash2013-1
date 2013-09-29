from django.contrib import admin

from .models import Profile


class ProfileAdmin(admin.ModelAdmin):

    readonly_fields = ['latitude', 'longitude', 'fs_id']

admin.site.register(Profile, ProfileAdmin)
