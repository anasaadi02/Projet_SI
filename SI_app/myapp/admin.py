from django.contrib import admin

# Register your models here.
from .models import Entreprise, Etudiant, Stage, Professeur

admin.site.register(Entreprise)
admin.site.register(Etudiant)
admin.site.register(Stage)
admin.site.register(Professeur)