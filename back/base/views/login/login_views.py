# budget_app/login_views.py

from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from ...serializers import CustomTokenObtainPairSerializer, CustomTokenRefreshSerializer
from django.http import JsonResponse
from django.contrib.auth import get_user_model
def login_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return JsonResponse({'success': True, 'redirect': '/home/'})
        else:
            return JsonResponse({'success': False, 'message': 'Invalid credentials'})
    return JsonResponse({'success': False, 'message': 'Invalid request'})

User = get_user_model()

def registration_view(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')
        
        # You can add more validation and error handling here
        
        user = User.objects.create_user(email=email, password=password)
        return JsonResponse({'message': 'User registered successfully.'})
    return JsonResponse({'message': 'Registration form not submitted.'}, status=400)

class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer

class CustomTokenRefreshView(TokenRefreshView):
    serializer_class = CustomTokenRefreshSerializer