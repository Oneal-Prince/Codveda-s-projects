from django.shortcuts import render
from django.shortcuts import render, redirect
from django.contrib.auth import login
from .forms import RegisterForm
from .models import Task
from django.contrib.auth.decorators import login_required
from .forms import RegisterForm, TaskForm


def home(request):
    tasks = Task.objects.all()

    context = {
        "tasks": tasks
    }

    return render(request, "tasks/home.html", context)

def register(request):
    if request.method == "POST":
        form = RegisterForm(request.POST)

        if form.is_valid():
            user = form.save()
            login(request, user)

            return redirect("dashboard")

    else:
        form = RegisterForm()

    return render(
        request,
        "registration/register.html",
        {"form": form}
    )
@login_required
def dashboard(request):
    return render(request, "tasks/dashboard.html")

@login_required
def create_task(request):

    if request.method == "POST":

        form = TaskForm(request.POST)

        if form.is_valid():

            task = form.save(commit=False)

            task.user = request.user

            task.save()

            return redirect("dashboard")

    else:
        form = TaskForm()

    return render(
        request,
        "tasks/task_form.html",
        {"form": form}
    )