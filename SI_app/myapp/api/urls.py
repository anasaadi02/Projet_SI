from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import StageViewSet


stage_router = DefaultRouter()
stage_router.register(r'Stages', StageViewSet)