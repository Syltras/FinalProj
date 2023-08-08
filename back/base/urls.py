from django.contrib import admin
from django.urls import path
from .views.views import ExpenseSummaryAPIView,index
from .views.login.login_views import login_view
from . import views
urlpatterns = [
    path('', index),
    path('api/expense-summary/', ExpenseSummaryAPIView.as_view(), name='expense-summary'),
    path('api/login/', login_view, name='login'),
]
