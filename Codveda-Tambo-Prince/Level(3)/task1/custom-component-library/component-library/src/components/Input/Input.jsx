import "./Input.css";

function Input({
    id,
    label,
    type = "text",
    placeholder = "",
    value,
    onChange,
    error,
    required = false,
    disabled = false
}) {
    const errorId = `${id}-error`;

    return (
        <div className="ui-input-group">

            <label
                htmlFor={id}
                className="ui-input-label"
            >
                {label}

                {required && (
                    <span aria-hidden="true">
                        {" "}*
                    </span>
                )}
            </label>

            <input
                id={id}
                name={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
                disabled={disabled}
                aria-invalid={error ? "true" : "false"}
                aria-describedby={
                    error ? errorId : undefined
                }
                className={`ui-input ${
                    error ? "ui-input-error" : ""
                }`}
            />

            {error && (
                <p
                    id={errorId}
                    className="ui-input-error-message"
                    role="alert"
                >
                    {error}
                </p>
            )}

        </div>
    );
}

export default Input;