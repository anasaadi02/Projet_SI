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

@csrf_exempt
def add_stage(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        new_stage = Stage(
            promo=data['promo'],
            nEtudiant=data['nEtudiant'],
            prof=data['prof'],
            tuteur=data['tuteur'],
            tpe=data['tpe'],
            annee=data['annee'],
            compte_rendu=data['compte_rendu'],
            entreprise=data['entreprise'],
        )
        new_stage.save()
        return JsonResponse({'message': 'Stage added successfully'})
    else:
        return JsonResponse({'error': 'Invalid request method'})