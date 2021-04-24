import React from "react";
import "./../styles/Pagination.css"

export default function Pagination(props) {
    // we define the pages variable like an array
    const pages = [];

    // recuperation of the datas in props
    let { currentPage, nbPages } = props;

    // for the all numbers of page, we push <li> in the pages variables
    for (let i = 1; i <= nbPages; i++) {
        pages.push(
            <li className={`link ${currentPage === i ? "link-active" : ""}`} key={i} onClick={() => props.onClick(i)}>{i}</li>
        );
    }

    // we return the pagination
    return (
        <ul style={{display: "flex"}}>
            <li className="link" onClick={() => props.onClick(currentPage - 1)}>{"<"}</li>
            {pages}
            <li className="link" onClick={() => props.onClick(currentPage + 1)}>{">"}</li>
        </ul>
    );
}
