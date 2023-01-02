from ..models import Store, Appointment


# Store handle


class StoreClass:

    def create(self, user, name, length, price, opend, closed, openh, closeh):
        save_store = Store.objects.create(user=user, name=name, meeting_length=length, price=price, open_days=opend, close_days=closed, open_hours=openh, close_hours=closeh)
        save_store.save()


