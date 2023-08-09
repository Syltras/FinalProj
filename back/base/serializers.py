from rest_framework import serializers
from .models import Expense
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer, TokenRefreshSerializer
class ExpenseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expense
        fields = '__all__'

class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        # Customize response data if needed
        return data

class CustomTokenRefreshSerializer(TokenRefreshSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        # Customize response data if needed
        return data