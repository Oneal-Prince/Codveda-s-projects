import { useEffect, useRef } from "react";
import "./Modal.css";

function Modal({
    isOpen,
    onClose,
    title,
    children,
    size = "medium"
}) {
    const modalRef = useRef(null);

    useEffect(() => {
        if (!isOpen) {
            return;
        }

        const handleEscape = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener("keydown", handleEscape);

        modalRef.current?.focus();

        return () => {
            document.removeEventListener("keydown", handleEscape);
        };
    }, [isOpen, onClose]);

    if (!isOpen) {
        return null;
    }

    return (
        <div
            className="ui-modal-overlay"
            onMouseDown={onClose}
            role="presentation"
        >

            <section
                ref={modalRef}
                className={`ui-modal ui-modal-${size}`}
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
                tabIndex="-1"
                onMouseDown={(event) => event.stopPropagation()}
            >

                <header className="ui-modal-header">

                    <h2
                        id="modal-title"
                        className="ui-modal-title"
                    >
                        {title}
                    </h2>

                    <button
                        type="button"
                        className="ui-modal-close"
                        onClick={onClose}
                        aria-label="Close dialog"
                    >
                        ×
                    </button>

                </header>

                <div className="ui-modal-content">
                    {children}
                </div>

            </section>

        </div>
    );
}

export default Modal;