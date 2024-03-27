import "./App.css";
import "./App1.css";

export default function App() {
  return (
    <div id="home-page">
      {" "}
      {/* Body */}
      <div>
        {" "}
        {/* header */}
        <img
          id="logo"
          src="./images/money-logo.png"
          alt="Logo"
          height="auto"
          width="100px"
          loading="lazy"
        />
        {/* <!-- <button id="myBtn"></button> --> */}
        <nav>
          <ul className="menu">
            <li>
              <a className="current-menu-item" href="./index.html">
                Home
              </a>
            </li>
            <li>
              <a className="menu-item" href="./src/job-search.html">
                Job Search
              </a>
            </li>
            <li>
              <a className="link" href="./job-help.html">
                Job Help
              </a>
            </li>
            <li>
              <a className="link" href="./about-us.html">
                About Us
              </a>
            </li>
          </ul>
        </nav>
      </div>{" "}
      {/* This is for the header. */}
      <div>
        {" "}
        {/* main */}
        <div>
          {" "}
          {/* title */}
          <h1>Know Your Worth</h1>
          <h2>Get started Today</h2>
        </div>{" "}
        {/* title */}
        <div className="big-box">
          <div className="divider"></div>
          <section>
            {" "}
            {/* Does this need replaced with div? I guess we will have to try it and find out. */}
            <img
              src="images/salary-bell-curve.webp"
              alt="bell-curve"
              loading="lazy"
            />
            <div className="home-container">
              <h2>Job Search</h2>
              <p>
                Use KnowMyWorth as a resource to see how your salary compares to
                other people that have similar education and work experience.
                You can find this data using the{" "}
              </p>
            </div>
          </section>
          <div className="divider"></div>
          <section>
            {" "}
            {/* Does this need replaced with div? I guess we will have to try it and find out. */}
            <img
              src="images/US-salary-map.webp"
              alt="Map image"
              loading="lazy"
            />
            <div className="home-container">
              <h2>Location Matters</h2>
              <p>
                KnowYourWorth uses a database that recieves salary data from
                many different locations. This will allow us to give you the
                most accurate salary information possible.
              </p>
            </div>
          </section>
          <div className="divider"></div>
          <section>
            {" "}
            {/* Does this need replaced with div? I guess we will have to try it and find out. */}
            <img
              src="images/job-interview.webp"
              alt="Job Interview Image"
              loading="lazy"
            />
            <div className="home-container">
              <h2>Job Help</h2>
              <p>
                This section explains ways to find a job, become relevant
                canidate, and take initiative with your life when looking for
                future opportunities.{" "}
              </p>
            </div>
          </section>
          <div className="divider"></div>
          {/* This still needs to be finished. */}
          <h6>Additional Resources "clickable link boxes will go here"</h6>
          <a href="./"></a>
        </div>
      </div>{" "}
      {/* Big Box close */}
      <div>
        <source media="(max-width: 700px)" srcset="./images/salary-sm.webp" />
        <div
          className="invitation-banner"
          alt="invitation-banner"
          src="./images/salary.webp"
          loading="lazy"
        ></div>
      </div>{" "}
      {/* Close main */}
      <div>
        {" "}
        {/* footer */}
        {/* div for the logos */}
        <div className="logo-section">
          <div className="sm-logos">
            <a
              href="https://www.facebook.com/profile.php?id=61556146266910"
              target="_blank"
            >
              <img
                src="images/facebook-logo.webp"
                alt="fb icon"
                loading="lazy"
              />
            </a>
          </div>
          <div className="sm-logos">
            <a href="https://twitter.com" target="_blank">
              <img src="images/x-logo.webp" alt="X icon" loading="lazy" />
            </a>
          </div>
          <div className="sm-logos">
            <a href="https://instagram.com" target="_blank">
              <img
                src="images/instagram-logo.webp"
                alt="instagram icon"
                loading="lazy"
              />
            </a>
          </div>
          {/* div for the menu */}
          <div className="footer-menu">
            <ul>
              <li>
                <a className="current-menu-item" href="./index.html">
                  Home
                </a>
              </li>
              <li>
                <a className="menu-item" href="./job-search.html">
                  Job Search
                </a>
              </li>
              <li>
                <a className="link" href="./job-help.html">
                  Job Help
                </a>
              </li>
              <li>
                <a className="link" href="./about-us.html">
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>{" "}
      {/* footer */}
      <div className="copywrite">
        <p>&copy; 2022 Know Your Worth. All rights reserved.</p>
      </div>
    </div> /* Body ths one is ok like this because its not inside*/
    /* <link rel="stylesheet" href="" /> */
  );
}
