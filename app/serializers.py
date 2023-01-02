from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Appointment


# Serializer data


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'id',
            'username',
            'email'
        ]


class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = [
            'day',
            'start',
            'end'
        ]


class AppointmentAllSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = [
            'id',
            'user',
            'day',
            'start',
            'end',
            'confirm'
        ]


