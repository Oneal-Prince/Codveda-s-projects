import "./Button.css";

function Button({
    children,
    variant = "primary",
    type = "button",
    onClick,
    disabled = false,
    ariaLabel
}) {
    return (
        <button
            type={type}
            className={`ui-button ui-button-${variant}`}
            onClick={onClick}
            disabled={disabled}
            aria-label={ariaLabel}
        >
            {children}
        </button>
    );
}

export default Button;