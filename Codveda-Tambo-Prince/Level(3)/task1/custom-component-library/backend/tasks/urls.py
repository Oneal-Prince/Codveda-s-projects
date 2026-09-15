from django.urls import path
from . import views
from django.urls import path, include


urlpatterns = [
    path("", views.home, name="home"),
    path("register/", views.register, name="register"),
    path("dashboard/", views.dashboard, name="dashboard"),
    path("", include("django.contrib.auth.urls")),
    
    path("tasks/create/", views.create_task, name="create_task"),
]
