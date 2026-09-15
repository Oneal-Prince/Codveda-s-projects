import "./Card.css";

function Card({
    children,
    title,
    description,
    padding = "medium"
}) {
    return (
        <article className={`ui-card ui-card-${padding}`}>

            {title && (
                <header className="ui-card-header">
                    <h2 className="ui-card-title">
                        {title}
                    </h2>

                    {description && (
                        <p className="ui-card-description">
                            {description}
                        </p>
                    )}
                </header>
            )}

            <div className="ui-card-content">
                {children}
            </div>

        </article>
    );
}

export default Card;