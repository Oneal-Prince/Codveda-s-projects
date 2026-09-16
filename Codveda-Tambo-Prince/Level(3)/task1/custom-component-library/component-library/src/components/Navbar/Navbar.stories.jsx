import Navbar from "./Navbar";
import Button from "../Button/Button";

export default {
    title: "Components/Navbar",
    component: Navbar,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component:
                    "A reusable responsive navigation bar with navigation links, mobile menu support, and customizable actions."
            }
        }
    }
};

export const Default = {
    args: {
        brand: "TaskFlow",
        links: [
            {
                label: "Home",
                href: "#"
            },
            {
                label: "Dashboard",
                href: "#dashboard"
            },
            {
                label: "Tasks",
                href: "#tasks"
            },
            {
                label: "About",
                href: "#about"
            }
        ]
    }
};

export const WithAction = {
    render: () => (
        <Navbar
            brand="TaskFlow"
            links={[
                {
                    label: "Home",
                    href: "#"
                },
                {
                    label: "Dashboard",
                    href: "#dashboard"
                },
                {
                    label: "Tasks",
                    href: "#tasks"
                }
            ]}
            actions={
                <Button variant="primary">
                    Login
                </Button>
            }
        />
    )
};

export const CustomBrand = {
    args: {
        brand: "My Task Manager",
        links: [
            {
                label: "Home",
                href: "#"
            },
            {
                label: "Projects",
                href: "#projects"
            },
            {
                label: "Settings",
                href: "#settings"
            }
        ]
    }
};