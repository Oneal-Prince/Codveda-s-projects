from django.urls import include, path

from . import views


urlpatterns = [
    path("", views.home, name="home"),
    path("register/", views.register, name="register"),
    path("dashboard/", views.dashboard, name="dashboard"),
    path("", include("django.contrib.auth.urls")),
    path("tasks/create/", views.create_task, name="create_task"),
    path("tasks/<int:task_id>/edit/", views.edit_task, name="edit_task"),
    path("tasks/<int:task_id>/delete/", views.delete_task, name="delete_task"),
    path("tasks/<int:task_id>/complete/", views.complete_task, name="complete_task"),
]