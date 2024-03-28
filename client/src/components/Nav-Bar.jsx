import React from "react";
import "../styles/App.css";
import "../styles/App1.css";
import img1 from "../images/money-logo.png";
import { Link } from "react-router-dom";

function Nav_Bar() {
    return (
      <>
        <div id="nav_bar">
            <div>
            {/* logo */}
            <img
                id="logo"
                src={img1}
                alt="Logo"
                height="auto"
                width="100px"
                loading="lazy"
            />
            <nav>
                <ul className="menu">
                <li>
                    <Link className="link" to="/">
                    Home
                    </Link>
                </li>
                <li>
                    <Link className="link" to="/job-search">
                    Job Search
                    </Link>
                </li>
                <li>
                    <Link className="link" to="/job-help">
                    Job Help
                    </Link>
                </li>
                <li>
                    <Link className="link" to="/about-us">
                    About Us
                    </Link>
                </li>
                </ul>
            </nav>
            </div>
            </div>
      </>
  );
}        


export default Nav_Bar;