from django.shortcuts import render
from django.shortcuts import render, redirect
from django.contrib.auth import login
from .forms import RegisterForm
from .models import Task


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
def dashboard(request):
    return render(request, "tasks/dashboard.html")