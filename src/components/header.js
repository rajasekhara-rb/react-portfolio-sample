import React from "react";
import "./header.css";

function Header() {
    return (
        <>
            <div id="header" className=" navbar navbar-expand-lg d-flex flex-row">
                <h2 className="col col-lg-6 d-flex flex-row justify-content-around align-items-center m-4"><a href="/">START BOOTSTRAP</a></h2>
                <ul className=" col col-lg-4 d-flex flex-row justify-content-between align-items-center m-4">
                    <li className="p-2"><a href="/">PORTFOLIO</a></li>
                    <li className="p-2"><a href="/">ABOUT</a></li>
                    <li className="p-2"><a href="/">CONTACT</a></li>
                </ul>
            </div>
        </>
    )
}

export default Header;