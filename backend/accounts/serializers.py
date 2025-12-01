from rest_framework import serializers
from django.contrib.auth.models import User
# User это готовая модель которая джанго дает для авторизации,регистрации пользователей
# для хранения хэша,для работы с ссесиями


class RegisterSerializer(serializers.ModelSerializer):
    username = serializers.CharField()
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)
    class Meta:
         model = User
         fields = ["username","email","password"]
         extra_kwargs = {
            "username": {"validators": []},  # отключить built-in unique check
        }


    def validate_username(self,value):
        if User.objects.filter(username=value).exists():
            raise serializers.ValidationError("Ошибка такой пользователь существует")
        return value #после ретерна данные попадают в validated_data
    
    def validate_email(self,value):
        if User.objects.filter(email=value).exists():
            raise serializers.ValidationError("Ошибка пользаватель с таким email существует")
        return value
    
    def create(self,validated_data):
        return User.objects.create_user(
            username=validated_data["username"],
            email=validated_data["email"],
            password=validated_data["password"]
        )