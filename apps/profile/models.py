from django.db import models
from django.contrib.auth.models import AbstractUser

class Profile(AbstractUser):

    last_update = models.DateField(auto_now=True)
    latitude = models.DecimalField(max_digits=5, decimal_places=2)
    longitude = models.DecimalField(max_digits=5, decimal_places=2)
