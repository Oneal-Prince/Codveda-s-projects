import Button from "./Button";

export default {
    title: "Components/Button",
    component: Button,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component:
                    "A reusable and accessible button component with multiple visual variants."
            }
        }
    }
};

export const Primary = {
    args: {
        children: "Primary Button",
        variant: "primary"
    }
};

export const Secondary = {
    args: {
        children: "Secondary Button",
        variant: "secondary"
    }
};

export const Danger = {
    args: {
        children: "Delete",
        variant: "danger"
    }
};

export const Outline = {
    args: {
        children: "Outline Button",
        variant: "outline"
    }
};

export const Disabled = {
    args: {
        children: "Disabled Button",
        disabled: true
    }
};