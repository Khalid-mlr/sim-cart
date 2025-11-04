from django.contrib.auth.models import User
import jwt
from datetime import datetime, timedelta
from django.conf import settings

SECRET = settings.SECRET_KEY

def create_token(user):
    payload = {
        "user_id": user.id,
        "email": user.email,
        "exp": datetime.utcnow() + timedelta(hours=1)
    }
    token = jwt.encode(payload, SECRET, algorithm="HS256")
    return token

def register_user(data):
    user = User.objects.create_user(
        username=data["email"],
        email=data["email"],
        password=data["password"],
        first_name=data["firstName"],
        last_name=data["lastName"]
    )
    token = create_token(user)
    return {"access_token": token, "message": "Регистрация успешна"}
