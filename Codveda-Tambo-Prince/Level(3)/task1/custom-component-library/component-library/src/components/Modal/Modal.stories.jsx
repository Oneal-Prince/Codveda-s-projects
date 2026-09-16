import { useState } from "react";
import Modal from "./Modal";
import Button from "../Button/Button";

export default {
    title: "Components/Modal",
    component: Modal,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component:
                    "A reusable accessible modal dialog that supports closing with a button, overlay click, or Escape key."
            }
        }
    }
};

export const Default = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);

        return (
            <>
                <Button onClick={() => setIsOpen(true)}>
                    Open Modal
                </Button>

                <Modal
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    title="Create New Task"
                >
                    <p>
                        This is an example of the reusable
                        Modal component.
                    </p>

                    <Button onClick={() => setIsOpen(false)}>
                        Close
                    </Button>
                </Modal>
            </>
        );
    }
};

export const Small = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);

        return (
            <>
                <Button onClick={() => setIsOpen(true)}>
                    Open Small Modal
                </Button>

                <Modal
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    title="Small Modal"
                    size="small"
                >
                    <p>
                        This modal uses the small size.
                    </p>
                </Modal>
            </>
        );
    }
};

export const Large = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);

        return (
            <>
                <Button onClick={() => setIsOpen(true)}>
                    Open Large Modal
                </Button>

                <Modal
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    title="Large Modal"
                    size="large"
                >
                    <p>
                        This modal uses the large size and
                        provides more space for content.
                    </p>
                </Modal>
            </>
        );
    }
};