from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm

from .models import Task


class RegisterForm(UserCreationForm):
    email = forms.EmailField(required=True)

    class Meta:
        model = User
        fields = ["username", "email", "password1", "password2"]


class TaskForm(forms.ModelForm):

    class Meta:
        model = Task
        fields = ["title", "description"]

        widgets = {
            "title": forms.TextInput(
                attrs={
                    "placeholder": "Enter task title",
                    "class": "w-full rounded-lg border border-slate-300 px-4 py-3"
                }
            ),

            "description": forms.Textarea(
                attrs={
                    "placeholder": "Describe your task...",
                    "rows": 5,
                    "class": "w-full rounded-lg border border-slate-300 px-4 py-3"
                }
            ),
        }