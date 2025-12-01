from rest_framework.generics import CreateAPIView
from accounts.serializers import RegisterSerializer
from rest_framework.response import Response

class RegisterView(CreateAPIView):
    serializer_class = RegisterSerializer
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data) #передаем в  твой сериал то что мы получили с фронта
        
        serializer.is_valid(raise_exception=True) #прогоняет через твой сериализатор
        serializer.save()
        return Response({"message":"ok"},status=201)
    
