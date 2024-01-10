from ..models import Entreprise, Stage
from rest_framework.viewsets import ModelViewSet
from .serializers import StageSerializer
from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView, UpdateAPIView, DestroyAPIView


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