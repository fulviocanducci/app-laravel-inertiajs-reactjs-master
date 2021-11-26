import { Link } from "@inertiajs/inertia-react";
import React from "react";
import Layout from "../../Layout";

function Help() {
    return (
        <div>
            <h1>Ajuda</h1>
            <Link href="/">Home</Link>
        </div>
    );
}

Help.layout = (page: any) => <Layout children={page} />;

export default Help;
