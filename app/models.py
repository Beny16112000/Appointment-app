from django.db import models
from django.contrib.auth.models import User


# Create your models here.


class Vendor(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    vendor = models.BooleanField(default=False)


DAY_OF_THE_WEEK = (
    ('1', 'Sunday'),
    ('2', 'Monday'),
    ('3', 'Tuesday'),
    ('4', 'Wednesday'),
    ('5', 'Thursday'),
    ('6', 'Friday'),
    ('7', 'Saturday'),
)


class Store(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    meeting_length = models.IntegerField()
    price = models.IntegerField()
    open_days = models.CharField(max_length=30, choices=DAY_OF_THE_WEEK, default='1')
    close_days = models.CharField(max_length=30, choices=DAY_OF_THE_WEEK, default='7')
    open_hours = models.TimeField()
    close_hours = models.TimeField()



class Appointment(models.Model):
    store = models.ForeignKey(Store, on_delete=models.CASCADE)
    user = models.EmailField()
    day = models.CharField(max_length=30, choices=DAY_OF_THE_WEEK, default='1')
    start = models.TimeField()
    end = models.TimeField()
    confirm = models.BooleanField(default=False)


