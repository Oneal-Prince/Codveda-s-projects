import FormField from "./FormField";
import Input from "../Input/Input";

export default {
    title: "Components/FormField",
    component: FormField,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component:
                    "A reusable form field wrapper that provides labels, hints, required indicators, and accessible error messages."
            }
        }
    }
};

export const Default = {
    render: () => (
        <FormField
            id="username"
            label="Username"
        >
            <Input
                id="username"
                label=""
                placeholder="Enter your username"
                onChange={() => {}}
            />
        </FormField>
    )
};

export const Required = {
    render: () => (
        <FormField
            id="email"
            label="Email Address"
            required
            hint="We will never share your email."
        >
            <Input
                id="email"
                label=""
                type="email"
                placeholder="example@email.com"
                required
                onChange={() => {}}
            />
        </FormField>
    )
};

export const Error = {
    render: () => (
        <FormField
            id="password"
            label="Password"
            required
            error="Password must contain at least 8 characters."
        >
            <Input
                id="password"
                label=""
                type="password"
                placeholder="Enter your password"
                required
                error="Password must contain at least 8 characters."
                onChange={() => {}}
            />
        </FormField>
    )
};