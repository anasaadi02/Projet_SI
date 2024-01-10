from django.shortcuts import render, HttpResponse
from .models import Entreprise
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Stage
import json

# Create your views here.
def home(request):
    obj=Entreprise.objects.all()
    context={
        "obj":obj,
    }
    return render(request, "home.html", context)

