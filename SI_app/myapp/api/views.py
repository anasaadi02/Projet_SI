from ..models import Entreprise, Stage, Professeur, Etudiant
from rest_framework.viewsets import ModelViewSet
from .serializers import StageSerializer, EntrepriseSerializer, EtudiantSerializer, ProfesseurSerializer
from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView, UpdateAPIView, DestroyAPIView, ListAPIView


class StageViewSet(ModelViewSet):
    queryset = Stage.objects.all()
    serializer_class = StageSerializer

class StageListView(ListAPIView):
    queryset = Stage.objects.all()
    serializer_class = StageSerializer

class StageDetailView(RetrieveAPIView):
    queryset = Stage.objects.all()
    serializer_class = StageSerializer

class StageCreateView(CreateAPIView):
    queryset = Stage.objects.all()
    serializer_class = StageSerializer

class StageUpdateView(UpdateAPIView):
    queryset = Stage.objects.all()
    serializer_class = StageSerializer


class StageDeleteView(DestroyAPIView):
    queryset = Stage.objects.all()
    serializer_class = StageSerializer
    
class EntrepriseListView(ListAPIView):
    queryset = Entreprise.objects.all()
    serializer_class = EntrepriseSerializer

class EntrepriseCreateView(CreateAPIView):
    queryset = Entreprise.objects.all()
    serializer_class = EntrepriseSerializer

class EtudiantListView(ListAPIView):
    queryset = Etudiant.objects.all()
    serializer_class = EtudiantSerializer

class ProfesseurListView(ListAPIView):
    queryset = Professeur.objects.all()
    serializer_class = ProfesseurSerializer