"""
URL configuration for config project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
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
from django.urls import path
from BookMarkerApp.views import add_bookmark
from BookMarkerApp.views import delete_bookmark
from BookMarkerApp.views import get_bookmarks
urlpatterns = [
    path('admin/', admin.site.urls),
    path('add_bookmark/', add_bookmark),
    path('delete_bookmark/', delete_bookmark),
    path('get_bookmarks/', get_bookmarks),
]
