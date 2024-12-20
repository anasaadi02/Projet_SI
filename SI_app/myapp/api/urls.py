from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import StageViewSet, StageUpdateView, StageCreateView, StageDeleteView, EntrepriseCreateView, EntrepriseListView, ProfesseurListView, EtudiantListView


stage_router = DefaultRouter()
stage_router.register(r'Stages', StageViewSet)


urlpatterns = [
    path('create/', StageCreateView.as_view()),
    path('update/<int:pk>', StageUpdateView.as_view()),
    path('delete/<int:pk>', StageDeleteView.as_view()),
    path('createE/', EntrepriseCreateView.as_view()),
    path('entre/', EntrepriseListView.as_view()),
    path('etudiant/', EtudiantListView.as_view()),
    path('prof/', ProfesseurListView.as_view()),
],