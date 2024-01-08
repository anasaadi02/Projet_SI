from ..models import Entreprise, Stage
from rest_framework.viewsets import ModelViewSet
from .serializers import StageSerializer


class StageViewSet(ModelViewSet):
    queryset = Stage.objects.all()
    serializer_class = StageSerializer
