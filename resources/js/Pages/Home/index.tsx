import { Link } from "@inertiajs/inertia-react";
import React from "react";
import Layout from "../../Layout";

function Home() {
    return (
        <div>
            <h3>Home</h3>
        </div>
    );
}

Home.layout = (page: any) => <Layout children={page} />;

export default Home;
