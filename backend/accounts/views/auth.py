from rest_framework.generics import CreateAPIView
from django.contrib.auth.models import User
from accounts.serializers import RegisterSerializer

class RegisterView(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer