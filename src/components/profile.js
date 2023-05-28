import React from "react";
import './profile.css';

function Profile() {
    return (
        <>
            <div id="profile" className="d-flex flex-column jusify-content-center align-items-center">
                <img src="https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/avataaars.svg" alt="Profile"></img>
                <h1>START BOOTSTRAP</h1>
                <div className="icons">
                {/* <i class="bi bi-dash-lg"></i> */}
                <i class="bi bi-dash"></i>
                <i class="bi bi-dash"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-dash"></i>
                <i class="bi bi-dash"></i>
                {/* <i class="bi bi-dash-lg"></i> */}
                </div>
                <p>Graphic Artist - Web Designer - Illustrator</p>
            </div>
        </>
    )
}


export default Profile;
