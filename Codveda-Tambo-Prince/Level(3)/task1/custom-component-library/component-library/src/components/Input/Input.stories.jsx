import { useState } from "react";
import Input from "./Input";

export default {
    title: "Components/Input",
    component: Input,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component:
                    "A reusable and accessible input component with validation and error states."
            }
        }
    }
};

export const Default = {
    render: () => {
        const [value, setValue] = useState("");

        return (
            <Input
                id="name"
                label="Name"
                placeholder="Enter your name"
                value={value}
                onChange={(event) => setValue(event.target.value)}
            />
        );
    }
};

export const Required = {
    render: () => {
        const [value, setValue] = useState("");

        return (
            <Input
                id="email"
                label="Email"
                type="email"
                placeholder="Enter your email"
                value={value}
                onChange={(event) => setValue(event.target.value)}
                required
            />
        );
    }
};

export const Error = {
    render: () => {
        const [value, setValue] = useState("");

        return (
            <Input
                id="password"
                label="Password"
                type="password"
                placeholder="Enter your password"
                value={value}
                onChange={(event) => setValue(event.target.value)}
                error="Password must be at least 8 characters."
            />
        );
    }
};

export const Disabled = {
    render: () => {
        return (
            <Input
                id="disabled"
                label="Username"
                value="Disabled input"
                disabled
                onChange={() => {}}
            />
        );
    }
};