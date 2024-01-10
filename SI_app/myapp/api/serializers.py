from rest_framework.serializers import ModelSerializer
from ..models import Stage, Entreprise, Etudiant, Professeur


class StageSerializer(ModelSerializer):
    class Meta:
        model = Stage
        fields = ['nStage', 'promo', 'nEtudiant', 'prof', 'tuteur','entreprise', 'tpe', 'annee', 'compte_rendu']


class EntrepriseSerializer(ModelSerializer):
    class Meta:
        model = Entreprise
        fields = ['nSiret', 'fJuridique', 'rSociale', 'adresse', 'suite','codeP', 'ville', 'Tele', 'FAX', 'contact', 'teleContact']


class EtudiantSerializer(ModelSerializer):
    class Meta:
        model = Etudiant
        fields = ['nEtudiant', 'nom', 'prenom', 'promo', 'adresse','Suite', 'code_postal', 'ville', 'sexe', 'date_de_naissance', 'telephone', 'menstion']


class ProfesseurSerializer(ModelSerializer):
    class Meta:
        model = Professeur
        fields = ['nProf', 'qualite', 'nom', 'prenom', 'adresse','Suite', 'code_postal', 'ville', 'tel_ecole', 'tel_domicile', 'date_embauche', 'date_depart']
