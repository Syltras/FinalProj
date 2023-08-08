# budget_app/views.py

from django.shortcuts import render
#from .views.login.login_views import login_view
#from .budget.budget_views import budget_list, budget_detail
from rest_framework.response import Response
from rest_framework.views import APIView
from ..models import Expense
from ..serializers import ExpenseSerializer
from django.db.models import Sum
from django.http import JsonResponse, HttpResponse


class ExpenseSummaryAPIView(APIView):
    def get(self, request, format=None):
        # Calculate total expenses per category using Django aggregation
        expenses_summary = Expense.objects.values('category').annotate(total_amount=Sum('amount'))

        # Prepare data for response, converting QuerySet to a list of dictionaries
        summary_data = [{'category': item['category'], 'total_amount': item['total_amount']} for item in expenses_summary]

        return Response(summary_data)

def index(req):
    return JsonResponse('hello', safe=False)
