import React from "react";
import EasyEatsIcon from "./easyEatsIcon";
import "../HomePage.css"; 

const Navbar = () => {
    return ( 

        <div className="Navbar">
            <EasyEatsIcon/>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li><a href="https://www.linkedin.com/in/omari-hopkins-381a37263/">Contact Me</a></li>
            </ul>
        </div>

    );
}

export default Navbar;
