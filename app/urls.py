from django.urls import path, include
from . import views
from rest_framework.authtoken.views import obtain_auth_token
from rest_framework.routers import DefaultRouter


router = DefaultRouter(trailing_slash=False)
router.register('',views.RegisterLoginVendors, basename='auth')

router = DefaultRouter(trailing_slash=False)
router.register('',views.Appointments, basename='appointments')


urlpatterns = [
    path('auth/vendor/register', include(router.urls)),
    path('auth/vendor/login', views.RegisterLoginVendors.as_view({'post': 'sing_in'})),
    path('auth/vendor/logout', views.RegisterLoginVendors.as_view({'post': 'sing_out'})),
    path('manage/home', views.Manage.as_view()),
    path('appointment/create', views.MakeAppointment.as_view()),
    path('appointment/manage', include(router.urls)),

]


