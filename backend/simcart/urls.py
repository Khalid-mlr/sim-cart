from django.contrib import admin
from django.urls import path
from django.urls import include


urlpatterns = [
    path('admin/', admin.site.urls),
    # path("login/", login_view, name="login"),
    # path("logout/", logout_view, name="logout"),
    # path("profile/", profile_view, name="profile"),
    path("api/",include('accounts.urls')),
]
