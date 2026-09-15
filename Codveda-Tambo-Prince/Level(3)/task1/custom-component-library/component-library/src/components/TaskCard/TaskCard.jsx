import "./TaskCard.css";

function TaskCard({
    title,
    description,
    status = "pending",
    createdAt,
    onComplete,
    onEdit,
    onDelete
}) {
    const isCompleted = status === "completed";

    return (
        <article className="ui-task-card">

            <div className="ui-task-card-content">

                <div className="ui-task-card-header">

                    <div>
                        <h2 className="ui-task-card-title">
                            {title}
                        </h2>

                        {description && (
                            <p className="ui-task-card-description">
                                {description}
                            </p>
                        )}
                    </div>

                    <span
                        className={`ui-task-card-status ${
                            isCompleted
                                ? "ui-task-card-status-completed"
                                : "ui-task-card-status-pending"
                        }`}
                    >
                        {isCompleted
                            ? "Completed"
                            : "Pending"}
                    </span>

                </div>

                <div className="ui-task-card-footer">

                    <div className="ui-task-card-meta">
                        {createdAt && (
                            <span>
                                {createdAt}
                            </span>
                        )}
                    </div>

                    <div
                        className="ui-task-card-actions"
                        aria-label={`Actions for ${title}`}
                    >

                        {!isCompleted && (
                            <button
                                type="button"
                                className="ui-task-card-button ui-task-card-complete"
                                onClick={onComplete}
                                aria-label={`Mark ${title} as completed`}
                            >
                                Complete
                            </button>
                        )}

                        <button
                            type="button"
                            className="ui-task-card-button"
                            onClick={onEdit}
                            aria-label={`Edit ${title}`}
                        >
                            Edit
                        </button>

                        <button
                            type="button"
                            className="ui-task-card-button ui-task-card-delete"
                            onClick={onDelete}
                            aria-label={`Delete ${title}`}
                        >
                            Delete
                        </button>

                    </div>

                </div>

            </div>

        </article>
    );
}

export default TaskCard;