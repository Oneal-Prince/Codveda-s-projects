import TaskCard from "./TaskCard";

export default {
    title: "Components/TaskCard",
    component: TaskCard,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component:
                    "A reusable task card component for displaying task information, status, and task actions."
            }
        }
    }
};

export const Pending = {
    args: {
        title: "Complete project documentation",
        description:
            "Finish the README and document all reusable components.",
        status: "pending",
        createdAt: "September 16, 2026",
        onComplete: () => alert("Task completed"),
        onEdit: () => alert("Edit task"),
        onDelete: () => alert("Delete task")
    }
};

export const Completed = {
    args: {
        title: "Create responsive landing page",
        description:
            "Build and test the responsive landing page.",
        status: "completed",
        createdAt: "September 15, 2026",
        onComplete: () => {},
        onEdit: () => alert("Edit task"),
        onDelete: () => alert("Delete task")
    }
};

export const WithoutDescription = {
    args: {
        title: "Review component library",
        status: "pending",
        createdAt: "September 16, 2026",
        onComplete: () => alert("Task completed"),
        onEdit: () => alert("Edit task"),
        onDelete: () => alert("Delete task")
    }
};