import { Link } from "@inertiajs/inertia-react";
import React from "react";

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Link href="/help">Ajuda</Link>
        </div>
    );
}

export default Home;
