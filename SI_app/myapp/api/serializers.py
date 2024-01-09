from rest_framework.serializers import ModelSerializer
from ..models import Stage


class StageSerializer(ModelSerializer):
    class Meta:
        model = Stage
        fields = ['nStage', 'promo', 'nEtudiant', 'prof', 'tuteur','entreprise', 'tpe', 'annee', 'compte_rendu']
        
    