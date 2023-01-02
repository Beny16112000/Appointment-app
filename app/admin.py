from django.contrib import admin
from .models import Vendor, Store, Appointment


# Register your models here.


class VendorAdmin(admin.ModelAdmin):
    list_display = ('user',)
admin.site.register(Vendor, VendorAdmin)

class StoreAdmin(admin.ModelAdmin):
    list_display = ('user','name')
admin.site.register(Store, StoreAdmin)

class AppointmentAdmin(admin.ModelAdmin):
    list_display = ('store','user')
admin.site.register(Appointment, AppointmentAdmin)
