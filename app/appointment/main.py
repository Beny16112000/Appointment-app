from ..models import Appointment, Store
from django.core.exceptions import ObjectDoesNotExist


# Manage Appointments
    

class AppointmentClass:
    success = True
    fail = None

    def create(self, store, email, day, start, end):
        check = self.check(store ,day, start)
        if check is self.success:
            find_store = Store.objects.get(id=store)
            appointment = Appointment.objects.create(store=find_store, user=email, day=day, start=start, end=end)
            appointment.save()
            return self.get()
        else:
            return self.fail


    def check(self, store, day ,start):
        try:
            Appointment.objects.get(store=store ,day=day, start=start)
        except ObjectDoesNotExist:
            return self.success


    def get(self):
        appointment = Appointment.objects.last()
        return appointment


    def get_all(self, user):
        store = Store.objects.get(user=user.id)
        appointments = Appointment.objects.filter(store=store)
        return appointments


    def update(self, id):
        appointment = Appointment.objects.get(id=id)
        appointment.confirm = True
        appointment.save()


    def delete(self, id):
        appointment = Appointment.objects.get(id=id)
        appointment.delete()
        

        