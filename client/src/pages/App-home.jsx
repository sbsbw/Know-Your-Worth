import React from "react";
import "../styles/App.css";
import "../styles/App1.css";
import img2 from "../images/salary-bell-curve.webp"
import img3 from "../images/US-salary-map.webp"
import img4 from "../images/job-interview.webp"
import img5 from "../images/salary-sm.webp"

export default function App_home() {
  return (
    <div id="home-page">
      {/* Body */}
      <div>
        {/* main */}
        <div>
          {/* title */}
          <h1>Know Your Worth</h1>
          <h2>Get started Today</h2>
        </div>
        {/* title */}
        <div className="big-box">
          <div className="divider"></div>
          <section>
            {/* Does this need replaced with div? I guess we will have to try it and find out. */}
            <img
              src={img2}
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
            {/* Does this need replaced with div? I guess we will have to try it and find out. */}
            <img
              src={img3}
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
            {/* Does this need replaced with div? I guess we will have to try it and find out. */}
            <img
              src={img4}
              alt="Job Interview Image"
              loading="lazy"
            />
            <div className="home-container">
              <h2>Job Help</h2>
              <p>
                This section explains ways to find a job, become relevant
                canidate, and take initiative with your life when looking for
                future opportunities.
              </p>
            </div>
          </section>
          <div className="divider"></div>
          {/* This still needs to be finished. */}
          <h6>Additional Resources "clickable link boxes will go here"</h6>
          <a href="./"></a>
        </div>
      </div>
      {/* Big Box close */}
      <div>
        <source media="(max-width: 700px)" srcset="./images/salary-sm.webp" />
        <img
          className="invitation-banner"
          alt="invitation-banner"
          src={img5}
          loading="lazy"
        />
      </div>
      {/* Close main */}
      <div>
    </div> 
    </div>
  );}
  