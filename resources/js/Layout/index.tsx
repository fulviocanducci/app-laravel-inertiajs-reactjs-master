import { Link } from "@inertiajs/inertia-react";
import React from "react";

interface ILayoutProps {
    children: React.ReactChild;
}

function Layout({ children }: ILayoutProps) {
    return (
        <>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        InertiaJs / Laravel
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse"
                        aria-controls="navbarCollapse"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarCollapse"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <Link href="/" className="nav-link">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/todo" className="nav-link">
                                    Todo
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <main className="container">
                <div className="p-1">{children}</div>
            </main>
        </>
    );
}

export default Layout;
