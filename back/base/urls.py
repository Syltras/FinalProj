from django.contrib import admin
from django.urls import path
from .views.login.login_views import CustomTokenObtainPairView,CustomTokenRefreshView,registration_view
from . import views
urlpatterns = [
    path('api/token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', CustomTokenRefreshView.as_view(), name='token_refresh'),
    path('api/register/', registration_view, name='register'),
]
