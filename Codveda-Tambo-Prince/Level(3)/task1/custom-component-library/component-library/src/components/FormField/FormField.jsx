import "./FormField.css";

function FormField({
    id,
    label,
    children,
    hint,
    error,
    required = false
}) {
    const hintId = `${id}-hint`;
    const errorId = `${id}-error`;

    return (
        <div className="ui-form-field">

            <label
                htmlFor={id}
                className="ui-form-field-label"
            >
                {label}

                {required && (
                    <span aria-hidden="true">
                        {" "}*
                    </span>
                )}
            </label>

            {children}

            {hint && !error && (
                <p
                    id={hintId}
                    className="ui-form-field-hint"
                >
                    {hint}
                </p>
            )}

            {error && (
                <p
                    id={errorId}
                    className="ui-form-field-error"
                    role="alert"
                >
                    {error}
                </p>
            )}

        </div>
    );
}

export default FormField;