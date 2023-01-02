from rest_framework.response import Response
from rest_framework import status, viewsets
from rest_framework.parsers import JSONParser
from rest_framework.views import APIView
from .authentication.auth import UserTest, UserClass
from django.http import JsonResponse
from rest_framework.decorators import action
from .authentication.tokens import TokenAuth
from .serializers import UserSerializer, AppointmentSerializer, AppointmentAllSerializer
from .store.main import StoreClass
from .appointment.main import AppointmentClass


# Create your views here.


"""
Superuser: Username = a, email = a@a.com, password = 1234
"""


class RegisterLoginVendors(viewsets.ModelViewSet):
    """
    Register, Login, Logout class
    """
    def create(self, request):
        data = JSONParser().parse(request)
        check = UserTest().register(data['username'],data['fname'],data['lname'],data['email'],data['pass1'],data['pass2'])
        if check is True:
            UserClass().vendor(data['username'])
            return JsonResponse({'message': 'Registerd'}, status=status.HTTP_201_CREATED)
        else:
            return JsonResponse({'message': check}, status=status.HTTP_404_NOT_FOUND)


    @action(detail=True, methods=['post'])
    def sing_in(self, request):
        data = JSONParser().parse(request)
        check_user = UserTest().log_in(data['username'],data['password'])
        if check_user is True:
            token = TokenAuth().create(data['username'])
            return JsonResponse({'message': token.key}, status=status.HTTP_200_OK)
        else:
            return JsonResponse({'message': check_user}, status=status.HTTP_404_NOT_FOUND)


    @action(detail=True, methods=['post'])
    def sing_out(self, request):
        data = JSONParser().parse(request)
        UserClass().sign_out(data['token'])
        return JsonResponse({'message': 'success'}, status=status.HTTP_200_OK)



class Manage(APIView):
    """
    Get user for Home page, setting store
    """
    def get(self, request):
        user = UserClass().get_user(request)
        serializer = UserSerializer(user)
        return JsonResponse({'user': serializer.data}, status=status.HTTP_200_OK)


    def post(self, request):
        data = JSONParser().parse(request)
        user = UserClass().get_user(request)
        StoreClass().create(user, data['name'], data['length'], data['price'], data['opend'], data['closed'], data['openh'], data['closeh'])
        return JsonResponse({'message': 'success'}, status=status.HTTP_200_OK)



class Appointments(viewsets.ModelViewSet):
    """
    Manage Appointments
    """
    def list(self, request):
        user = UserClass().get_user(request)
        appointments = AppointmentClass().get_all(user)
        serializer = AppointmentAllSerializer(appointments, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


    def update(self, request, pk):
        AppointmentClass().update(pk)
        return Response('Confirm !', status=status.HTTP_200_OK)

    
    def destroy(self, request, pk):
        AppointmentClass().delete(pk)
        return Response('Deleted !', status=status.HTTP_200_OK)



class MakeAppointment(APIView):
    """
    Make an appointment
    """
    def post(self, request):
        data = JSONParser().parse(request)
        appointment = AppointmentClass().create(data['store'], data['user'], data['day'], data['start'], data['end'])
        if appointment is not None:
            serializer = AppointmentSerializer(appointment)
            return JsonResponse({'message': serializer.data}, status=status.HTTP_200_OK)
        else:
            return JsonResponse({'message': 'Fail to create Appointment'}, status=status.HTTP_404_NOT_FOUND)



