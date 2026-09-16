from django.contrib.auth import get_user_model
from django.test import TestCase
from django.urls import reverse

from .models import Task


class TaskFlowUrlTests(TestCase):
    def setUp(self):
        self.user = get_user_model().objects.create_user(
            username="demo",
            password="demo12345",
        )
        self.task = Task.objects.create(
            user=self.user,
            title="Write project brief",
            description="Draft the task flow summary.",
        )

    def test_edit_and_delete_task_urls_exist(self):
        self.assertEqual(
            reverse("edit_task", args=[self.task.pk]),
            f"/tasks/{self.task.pk}/edit/",
        )
        self.assertEqual(
            reverse("delete_task", args=[self.task.pk]),
            f"/tasks/{self.task.pk}/delete/",
        )

    def test_dashboard_displays_user_tasks(self):
        self.client.login(username="demo", password="demo12345")
        response = self.client.get(reverse("dashboard"))

        self.assertEqual(response.status_code, 200)
        self.assertContains(response, self.task.title)
