import Card from "./Card";

export default {
    title: "Components/Card",
    component: Card,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component:
                    "A reusable content card component with customizable padding, title, and description."
            }
        }
    }
};

export const Default = {
    args: {
        title: "My Task",
        description: "This is a reusable card component.",
        children: (
            <p>
                Card content goes here. You can place text,
                buttons, forms, or other components inside it.
            </p>
        )
    }
};

export const Small = {
    args: {
        title: "Small Card",
        description: "A card with small padding.",
        padding: "small",
        children: (
            <p>
                This card uses the small padding option.
            </p>
        )
    }
};

export const Medium = {
    args: {
        title: "Medium Card",
        description: "A card with medium padding.",
        padding: "medium",
        children: (
            <p>
                This is the default card size.
            </p>
        )
    }
};

export const Large = {
    args: {
        title: "Large Card",
        description: "A card with large padding.",
        padding: "large",
        children: (
            <p>
                This card has more spacing around its content.
            </p>
        )
    }
};

export const WithoutHeader = {
    args: {
        children: (
            <p>
                This card does not have a title or description.
            </p>
        )
    }
};