from rest_framework.generics import CreateAPIView
from rest_framework.views import APIView
from accounts.serializers import RegisterSerializer
from rest_framework.response import Response
from accounts.loginSerializer import LoginSerializer
from django.contrib.auth import login

class RegisterView(CreateAPIView):
    serializer_class = RegisterSerializer
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data) #передаем в  твой сериал то что мы получили с фронта
        
        serializer.is_valid(raise_exception=True) #прогоняет через твой сериализатор
        serializer.save()
        return Response({"message":"ok"},status=201)
    
class SessionLoginView(APIView):
    def post (self,request):
        serializer = LoginSerializer(data=request.data) #передаем в  твой сериал то что мы получили с фронта
        serializer.is_valid(raise_exception=True) #если валидны вергет true иначе ошибку
        
        user = serializer.validated_data["user"] #user объект юзера который мы аутентифицировали

        login(request,user) #создает сессию для юзера
        
        return Response({"message":"Успешный вход"})  
    
    
