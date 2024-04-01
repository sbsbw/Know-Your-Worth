import React from 'react';
import img6 from "../images/facebook-logo.webp"
import img7 from "../images/x-logo.webp"
import img8 from "../images/instagram-logo.webp"

const Footer = () => {
  return (
    <div>
      {/* div for the logos */}
      <div className="logo-section">
        <div className="sm-logos">
          <a href="https://www.facebook.com/profile.php?id=61556146266910" target="_blank" rel="noopener noreferrer">
            <img src={img6} alt="fb icon" loading="lazy" />
          </a>
        </div>
        <div className="sm-logos">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={img7} alt="X icon" loading="lazy" />
          </a>
        </div>
        <div className="sm-logos">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={img8} alt="instagram icon" loading="lazy" />
          </a>
        </div>
        {/* div for the menu */}
        <div className="footer-menu">
          <ul>
            <li>
              <a className="current-menu-item" href="./">
                Home
              </a>
            </li>
            <li>
              <a className="menu-item" href="./job-search">
                Job Search
              </a>
            </li>
            <li>
              <a className="menu-item" href="./job-help">
                Job Help
              </a>
            </li>
            <li>
              <a className="menu-item" href="./about-us">
                About Us
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* footer close */}
      <div className="copywrite">
        <p>&copy; 2022 Know Your Worth. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;