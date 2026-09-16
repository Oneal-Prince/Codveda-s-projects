from django.contrib.auth import login
from django.contrib.auth.decorators import login_required
from django.shortcuts import redirect, render
from django.shortcuts import get_object_or_404

from .forms import RegisterForm, TaskForm
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


@login_required
def dashboard(request):
    tasks = Task.objects.filter(user=request.user).order_by("-created_at")
    return render(request, "tasks/dashboard.html", {"tasks": tasks})


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
        {"form": form, "task": None}
    )


@login_required
def edit_task(request, task_id):
    task = get_object_or_404(Task, pk=task_id, user=request.user)

    if request.method == "POST":
        form = TaskForm(request.POST, instance=task)

        if form.is_valid():
            form.save()
            return redirect("dashboard")
    else:
        form = TaskForm(instance=task)

    return render(
        request,
        "tasks/task_form.html",
        {"form": form, "task": task}
    )


@login_required
def delete_task(request, task_id):
    task = get_object_or_404(Task, pk=task_id, user=request.user)

    if request.method == "POST":
        task.delete()
        return redirect("dashboard")

    return redirect("dashboard")


@login_required
def complete_task(request, task_id):

    task = Task.objects.get(
        id=task_id,
        user=request.user
    )

    if request.method == "POST":
        task.status = "completed"
        task.save()

    return redirect("dashboard")