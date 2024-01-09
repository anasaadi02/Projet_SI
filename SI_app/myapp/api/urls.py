from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import StageViewSet, StageUpdateView, StageCreateView


stage_router = DefaultRouter()
stage_router.register(r'Stages', StageViewSet)

urlpatterns = [
    path('create/', StageCreateView.as_view()),
    path('<pk>/update/', StageUpdateView.as_view())
]