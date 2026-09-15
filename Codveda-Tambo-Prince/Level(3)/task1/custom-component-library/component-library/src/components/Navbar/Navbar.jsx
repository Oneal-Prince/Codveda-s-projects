import { useState } from "react";
import "./Navbar.css";

function Navbar({
    brand = "TaskFlow",
    links = [],
    actions
}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav
            className="ui-navbar"
            aria-label="Main navigation"
        >

            <div className="ui-navbar-container">

                <a
                    href="/"
                    className="ui-navbar-brand"
                >
                    {brand}
                </a>

                <button
                    type="button"
                    className="ui-navbar-toggle"
                    aria-label={
                        isMenuOpen
                            ? "Close navigation menu"
                            : "Open navigation menu"
                    }
                    aria-expanded={isMenuOpen}
                    aria-controls="navbar-menu"
                    onClick={() =>
                        setIsMenuOpen(!isMenuOpen)
                    }
                >
                    ☰
                </button>

                <div
                    id="navbar-menu"
                    className={`ui-navbar-menu ${
                        isMenuOpen
                            ? "ui-navbar-menu-open"
                            : ""
                    }`}
                >

                    <div className="ui-navbar-links">

                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="ui-navbar-link"
                            >
                                {link.label}
                            </a>
                        ))}

                    </div>

                    {actions && (
                        <div className="ui-navbar-actions">
                            {actions}
                        </div>
                    )}

                </div>

            </div>

        </nav>
    );
}

export default Navbar;