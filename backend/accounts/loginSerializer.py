from django.contrib.auth import authenticate
from rest_framework import serializers

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)

    def validate(self, attrs): #метод который проверяет валидность данных
        username = attrs.get("username") #извлекаем из attrs данные
        password = attrs.get("password")

        user = authenticate(username=username, password=password) #проверяет есть ли такой юзер с таким паролем в базе
        if not user:
            # общая ошибка, чтобы нельзя было угадать, что именно не так
            raise serializers.ValidationError("Неверный логин или пароль")

        # прокидываем найденного юзера дальше
        attrs["user"] = user
        return attrs


