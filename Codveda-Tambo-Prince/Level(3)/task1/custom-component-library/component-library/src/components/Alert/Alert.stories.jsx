import Alert from "./Alert";

export default {
    title: "Components/Alert",
    component: Alert,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component:
                    "A reusable alert component for displaying information, success messages, warnings, and errors."
            }
        }
    }
};

export const Info = {
    args: {
        type: "info",
        title: "Information",
        children: "This is an informational message."
    }
};

export const Success = {
    args: {
        type: "success",
        title: "Success",
        children: "Your task was saved successfully."
    }
};

export const Warning = {
    args: {
        type: "warning",
        title: "Warning",
        children: "Please check your task details."
    }
};

export const Error = {
    args: {
        type: "error",
        title: "Error",
        children: "Something went wrong. Please try again."
    }
};

export const Dismissible = {
    args: {
        type: "info",
        title: "Dismissible Alert",
        children: "You can close this alert.",
        dismissible: true,
        onDismiss: () => {
            alert("Alert dismissed");
        }
    }
};