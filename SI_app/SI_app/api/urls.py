from rest_framework.routers import DefaultRouter
from myapp.api.urls import stage_router
from django.urls import path, include

# from . import views


router = DefaultRouter()

router.registry.extend(stage_router.registry)

urlpatterns = [
    path('', include(router.urls))
]

