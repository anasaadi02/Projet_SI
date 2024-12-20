"""
URL configuration for SI_app project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from myapp.views import home
from myapp.api.views import StageViewSet, StageUpdateView, StageCreateView, StageDeleteView, EntrepriseCreateView, EntrepriseListView, EtudiantListView, ProfesseurListView



from django.contrib import admin
from django.urls import path, include




urlpatterns = [
    path('admin/', admin.site.urls),
    #add my first url ***
    path("api/", include('SI_app.api.urls')),
    path("add/", StageCreateView.as_view()),
    path("update/<int:pk>", StageUpdateView.as_view()),
    path('delete/<int:pk>', StageDeleteView.as_view()),
    path("addE/", EntrepriseCreateView.as_view()),
    path('api/entre/', EntrepriseListView.as_view()),
    path('api/etudiant/', EtudiantListView.as_view()),
    path('api/prof/', ProfesseurListView.as_view()),
]

#for pdf handling ***
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
