from django.shortcuts import render, HttpResponse
from .models import Entreprise

# Create your views here.
def home(request):
    obj=Entreprise.objects.all()
    context={
        "obj":obj,
    }
    return render(request, "home.html", context)