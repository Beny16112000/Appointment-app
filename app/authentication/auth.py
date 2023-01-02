from django.contrib.auth.models import User
from django.core.exceptions import ObjectDoesNotExist
from ..models import Vendor
from django.contrib.auth import authenticate
from .headers import HeadersRequest
from rest_framework.authtoken.models import Token


# All authentication, authorization, User test. classes


class UserTest:
    succses = True
    error = None
    
    def register(self, username, fname, lname, email, password1, password2):
        check_user = self.username_check(username)
        if check_user is not self.error:
            check_email = self.email_check(email)
            if check_email is not self.error:
                check_passwords = self.password_match(password1, password2)
                if check_passwords is not self.error:
                    check_len = self.password_len(password1)
                    if check_len is not self.error:
                        UserClass().create(username, fname, lname, email, password1)
                        return self.succses
                    else:
                        return 'password to short !'
                else:
                    return 'password1 dont equal !'
            else:
                return 'Email already exist !'
        else:
            return 'Username already exist !'


    def username_check(self, username):
        try:
            User.objects.get(username=username)
            return self.error

        except ObjectDoesNotExist:
            return self.succses

    
    def email_check(self, email):
        try:
            User.objects.get(email=email)
            return self.error

        except ObjectDoesNotExist:
            return self.succses


    def password_match(self, password1, password2):
        if password1 != password2:
            return self.error
    
        else:
            return self.succses

    
    def password_len(self, password):
        if len(password) < 4:
            return self.error
        else:
            return self.succses

    
    def log_in(self, username, password):
            check_auth = self.check_user(username, password)
            if check_auth is not self.error:
                return self.succses
            else:
                return 'Username or password not exist !'


    def check_user(self, username ,password):
        user = authenticate(username=username, password=password)
        if user is not None:
            return self.succses
        else:
            return self.error



class UserClass:

    def create(self, username, fname, lname, email, password):
        myuser = User.objects.create_user(username, email, password)
        myuser.first_name = fname
        myuser.last_name = lname
        myuser.is_active = False
        myuser.save()

    
    def vendor(self, username):
        user = User.objects.get(username=username)
        vendor_create = Vendor.objects.create(user=user)
        vendor_create.save()


    def get_user(self, request):
        data = HeadersRequest(request).token()
        token = Token.objects.get(key=data)
        user = User.objects.get(username=token.user)
        return user


    def sign_out(self, token):
        user = Token.objects.get(key=token)
        user.delete()


