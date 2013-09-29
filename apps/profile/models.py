from django.db import models
from django.contrib.auth.models import AbstractUser


class Profile(AbstractUser):

    last_update = models.DateTimeField(
        auto_now=True
    )
    latitude = models.DecimalField(
        max_digits=5,
        decimal_places=2,
        blank=True,
        null=True
    )
    longitude = models.DecimalField(
        max_digits=5,
        decimal_places=2,
        blank=True,
        null=True
    )
    fs_id = models.PositiveIntegerField(
        verbose_name='foursquare id',
        blank=True,
        null=True
    )
