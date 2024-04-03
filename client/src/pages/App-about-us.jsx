import "../styles/App.css";
import "../styles/App1.css";
import img9 from "../images/young-professionals.webp"
import img10 from "../images/Logan-prof-photo.webp"
import img11 from "../images/Devun-prof-photo.webp"
import img12 from "../images/Lincoln-prof-photo.webp"
import img13 from "../images/Hunter-prof-photo.webp"
import img14 from "../images/Sean-prof-photo.webp"

export default function AppAboutUs() {
  return (
    <div className="about-us-page">
      {/* body open */}
      <div>
        {/* main close */}
        <h1>About Us</h1>
        <div className="divider"></div>
        <div className="job-container">
          <picture>
            <img
              src={img9}
              alt="Job Interview Image"
              loading="lazy"
            />
          </picture>
          <p>
            Know Your Worth is a job search platform that informs job seekers
            of the pay range they deserve so that they can make resonable
            requests for compensation or know what jobs are not paying well
            enough.
          </p>
        </div>
        <div className="divider"></div>
        <div className="job-container">
          <h1>Our Mission</h1>
          <p>
            Welcome to Know Your Worth, your trusted companion in the journey to
            finding your dream job. At Know Your Worth, we understand the
            importance of landing not just any job, but the perfect fit for you
            – one that aligns with your skills, passions, and aspirations.
          </p>
          <p>
            Who are we? We are more than just a website; we are a team of
            passionate individuals driven by the mission to assist anyone
            to know how much they are worth and develop the skills they need
            to find the right job for them. 
          </p>
          <p>
            How do we do it? We use analyze salary data from other people that
            match your education level and work experience to help you evaluate
            how much you are worth as an employee.
          </p>
          <p>
            Join the Know Your Worth community today and embark on a journey
            towards a brighter future. Let's unlock your potential together –
            because when you know your worth, the possibilities are endless.
          </p>
        </div>
        <div className="divider"></div>
        <h1>Our Team</h1>
        <div id="team-container">
          <div className="team-member">
            <img src={img10} alt="Logan" loading="lazy" />
            <div>
              <h2>Logan</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                scelerisque vitae nunc ut dictum. Suspendisse potenti. Vestibulum.
              </p>
            </div>
          </div>
          <div className="team-member">
            <img
              src={img11}
              alt="Devun Durst"
              loading="lazy"
            />
            <div>
              <h2>Devun Durst</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                scelerisque vitae nunc ut dictum. Suspendisse potenti. Vestibulum.
              </p>
            </div>
          </div>
          <div className="team-member">
            <img
              src={img14}
              alt="Sean Walker"
              loading="lazy"
            />
            <div>              
              <h2>Sean Walker</h2>
              <p>
              I led the migration of our app to React, elevating its functionality 
              and user experience. I also contributed to design and styling, 
              debugged machine learning models, and managed database deployment
              and API optimization.
              </p>
            </div>
          </div>
        </div>
        <div id="team-container-1">
          <div className="team-member-1">
            <img src={img13} alt="Hunter" loading="lazy" />
            <div> 
              <h2>Hunter</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                scelerisque vitae nunc ut dictum. Suspendisse potenti. Vestibulum.
              </p>
            </div>
          </div>
          <div className="team-member-2">
            <img src={img12} alt="Lincoln" loading="lazy" />
            <div>
              <h2>Lincoln</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                scelerisque vitae nunc ut dictum. Suspendisse potenti. Vestibulum.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* main close */}
      <div>
      </div>
      {/* close body */}
    </div>
  );
}
