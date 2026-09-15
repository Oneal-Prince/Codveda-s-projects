import { useState } from "react";

import {
    Button,
    Input,
    Card,
    Alert,
    Modal,
    Navbar,
    FormField,
    TaskCard
} from "./components";

function App() {
    const [name, setName] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showAlert, setShowAlert] = useState(true);

    const handleComplete = () => {
        alert("Task marked as completed!");
    };

    const handleEdit = () => {
        alert("Edit task clicked!");
    };

    const handleDelete = () => {
        alert("Delete task clicked!");
    };

    return (
        <div
            style={{
                minHeight: "100vh",
                background: "#f8fafc"
            }}
        >
            {/* Navbar */}
            <Navbar
                brand="TaskFlow UI"
                links={[
                    { label: "Home", href: "/" },
                    { label: "Dashboard", href: "/dashboard" },
                    { label: "Components", href: "#components" }
                ]}
                actions={
                    <Button variant="primary">
                        Login
                    </Button>
                }
            />

            {/* Page Header */}
            <header
                style={{
                    maxWidth: "1100px",
                    margin: "0 auto",
                    padding: "60px 20px 30px"
                }}
            >
                <h1
                    style={{
                        margin: 0,
                        fontSize: "36px",
                        color: "#0f172a"
                    }}
                >
                    TaskFlow Component Library
                </h1>

                <p
                    style={{
                        marginTop: "12px",
                        fontSize: "16px",
                        color: "#64748b"
                    }}
                >
                    A reusable and accessible React component library
                    for the TaskFlow application.
                </p>
            </header>

            <main
                id="components"
                style={{
                    maxWidth: "1100px",
                    margin: "0 auto",
                    padding: "20px"
                }}
            >
                {/* Alert */}
                <section style={{ marginBottom: "40px" }}>
                    <h2>Alert</h2>

                    {showAlert && (
                        <Alert
                            type="success"
                            title="Success"
                            dismissible
                            onDismiss={() =>
                                setShowAlert(false)
                            }
                        >
                            Your task has been saved successfully.
                        </Alert>
                    )}
                </section>

                {/* Buttons */}
                <section style={{ marginBottom: "40px" }}>
                    <h2>Buttons</h2>

                    <div
                        style={{
                            display: "flex",
                            gap: "10px",
                            flexWrap: "wrap",
                            marginTop: "15px"
                        }}
                    >
                        <Button variant="primary">
                            Primary
                        </Button>

                        <Button variant="secondary">
                            Secondary
                        </Button>

                        <Button variant="danger">
                            Danger
                        </Button>

                        <Button variant="outline">
                            Outline
                        </Button>
                    </div>
                </section>

                {/* Input */}
                <section style={{ marginBottom: "40px" }}>
                    <h2>Input</h2>

                    <div style={{ maxWidth: "500px" }}>
                        <Input
                            id="name"
                            label="Full Name"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(event) =>
                                setName(event.target.value)
                            }
                            required
                        />
                    </div>
                </section>

                {/* FormField */}
                <section style={{ marginBottom: "40px" }}>
                    <h2>FormField</h2>

                    <div style={{ maxWidth: "500px" }}>
                        <FormField
                            id="email"
                            label="Email Address"
                            hint="Use the email associated with your account."
                            required
                        >
                            <input
                                id="email"
                                type="email"
                                placeholder="you@example.com"
                                style={{
                                    width: "100%",
                                    boxSizing: "border-box",
                                    padding: "12px",
                                    border: "1px solid #cbd5e1",
                                    borderRadius: "8px"
                                }}
                            />
                        </FormField>
                    </div>
                </section>

                {/* Card */}
                <section style={{ marginBottom: "40px" }}>
                    <h2>Card</h2>

                    <div style={{ maxWidth: "600px" }}>
                        <Card
                            title="TaskFlow Dashboard"
                            description="Manage your tasks from one simple dashboard."
                            padding="medium"
                        >
                            <p>
                                This is reusable content inside
                                the Card component.
                            </p>

                            <Button>
                                View Dashboard
                            </Button>
                        </Card>
                    </div>
                </section>

                {/* TaskCard */}
                <section style={{ marginBottom: "40px" }}>
                    <h2>TaskCard</h2>

                    <div
                        style={{
                            display: "grid",
                            gap: "20px",
                            marginTop: "15px"
                        }}
                    >
                        <TaskCard
                            title="Complete Codveda Assignment"
                            description="Finish the reusable component library."
                            status="pending"
                            createdAt="Sep 15, 2026"
                            onComplete={handleComplete}
                            onEdit={handleEdit}
                            onDelete={handleDelete}
                        />

                        <TaskCard
                            title="Build Django Authentication"
                            description="Complete login and registration."
                            status="completed"
                            createdAt="Sep 14, 2026"
                            onEdit={handleEdit}
                            onDelete={handleDelete}
                        />
                    </div>
                </section>

                {/* Modal */}
                <section style={{ marginBottom: "40px" }}>
                    <h2>Modal</h2>

                    <Button
                        variant="primary"
                        onClick={() =>
                            setIsModalOpen(true)
                        }
                    >
                        Open Modal
                    </Button>

                    <Modal
                        isOpen={isModalOpen}
                        onClose={() =>
                            setIsModalOpen(false)
                        }
                        title="Delete Task"
                        size="small"
                    >
                        <p>
                            Are you sure you want to delete
                            this task?
                        </p>

                        <div
                            style={{
                                display: "flex",
                                gap: "10px",
                                marginTop: "20px"
                            }}
                        >
                            <Button
                                variant="danger"
                                onClick={() => {
                                    setIsModalOpen(false);
                                    alert("Task deleted!");
                                }}
                            >
                                Delete
                            </Button>

                            <Button
                                variant="secondary"
                                onClick={() =>
                                    setIsModalOpen(false)
                                }
                            >
                                Cancel
                            </Button>
                        </div>
                    </Modal>
                </section>
            </main>

            {/* Footer */}
            <footer
                style={{
                    marginTop: "40px",
                    padding: "30px 20px",
                    textAlign: "center",
                    borderTop: "1px solid #e2e8f0",
                    color: "#64748b"
                }}
            >
                <p>
                    TaskFlow UI Component Library
                </p>

                <p>
                    Built with React for reusable,
                    accessible interfaces.
                </p>
            </footer>
        </div>
    );
}

export default App;