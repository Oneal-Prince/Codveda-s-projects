import "./Alert.css";

function Alert({
    children,
    type = "info",
    title,
    dismissible = false,
    onDismiss
}) {
    const alertRole = type === "error" ? "alert" : "status";

    return (
        <div
            className={`ui-alert ui-alert-${type}`}
            role={alertRole}
            aria-live={type === "error" ? "assertive" : "polite"}
        >

            <div className="ui-alert-content">

                {title && (
                    <h2 className="ui-alert-title">
                        {title}
                    </h2>
                )}

                <div className="ui-alert-message">
                    {children}
                </div>

            </div>

            {dismissible && (
                <button
                    type="button"
                    className="ui-alert-dismiss"
                    onClick={onDismiss}
                    aria-label="Dismiss alert"
                >
                    ×
                </button>
            )}

        </div>
    );
}

export default Alert;