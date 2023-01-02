from django.contrib.auth.tokens import PasswordResetTokenGenerator
from six import text_type
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User


# Create Token's


class ToeknGenerator(PasswordResetTokenGenerator):
    def _make_hash_value(self, user, timestamp):
        return (
            text_type(user.pk) + text_type(timestamp)
        )

generate_token = ToeknGenerator()



class TokenAuth:

    def create(self, username):
        user = User.objects.get(username=username)
        token = Token.objects.create(user=user)
        token.save()
        return token


        