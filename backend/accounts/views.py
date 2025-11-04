from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .services import register_user

@csrf_exempt
def register_view(request):
    data = json.loads(request.body)
    result = register_user(data)
    return JsonResponse(result)
