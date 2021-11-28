import { Link } from "@inertiajs/inertia-react";
import React from "react";
import { IPageBase } from "../../@Types";
import { decode } from "html-entities";
interface IPaginationProps {
    model: IPageBase;
}

function Pagination(props: IPaginationProps) {
    console.log(props);
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination pagination-sm justify-content-center">
                {props.model.links.map((item, index) => (
                    <li
                        className={
                            item.url
                                ? `page-item ${item.active ? "active" : ""}`
                                : "page-item disabled"
                        }
                        key={index}
                    >
                        <Link
                            href={item.url ?? ""}
                            className="page-link"
                            aria-disabled={item.active}
                        >
                            {decode(item.label || "")}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Pagination;
