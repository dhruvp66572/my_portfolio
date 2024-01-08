import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

const Contact = () => {

  // Add a Note
  const adddata = async ( cname, csubject, cemail, description) => {
      //  API Call
      const response = await fetch(`http://localhost:5000/api/addcontact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cname, csubject, cemail, description }),
      });
      const savedata = await response.json();
      console.log(savedata);
  };

  const handleClick = (e) => {
    e.preventDefault();
    let cname = document.getElementById("cname").value;
    let csubject = document.getElementById("csubject").value;
    let cemail = document.getElementById("cemail").value;
    let description = document.getElementById("description").value;
    
    adddata(cname, csubject, cemail, description);
    
    alert("Your Message has been sent. Thank you!")
    document.getElementById("cname").value = "";
    document.getElementById("csubject").value = "";
    document.getElementById("cemail").value = "";
    document.getElementById("description").value = "";

  };
  return (
    <div>
      <Header mode="contact" />

      <section id="contact" className="contact section-show">
        <div className="container">
          <div className="section-title">
            <h2>Contact</h2>
            <p>Contact Me</p>
          </div>

          <div className="row mt-2">
            <div className="col-md-6 d-flex align-items-stretch">
              <div className="info-box">
                <i className="bx bx-map"></i>
                <h3>My Address</h3>
                <p>
                  279-B New Anjar Chakrava Nagarpalika Colony (Anjar-Kutch),
                  Gujarat, India, 370 110
                </p>
              </div>
            </div>

            <div className="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
              <div className="info-box">
                <i className="bx bx-share-alt"></i>
                <h3>Social Profiles</h3>
                <div className="social-links">
                  <Link to="/" className="twitter">
                    <i className="bi bi-twitter"></i>
                  </Link>
                  <Link to="/" className="facebook">
                    <i className="bi bi-facebook"></i>
                  </Link>
                  <Link to="/" className="instagram">
                    <i className="bi bi-instagram"></i>
                  </Link>
                  <Link to="/" className="google-plus">
                    <i className="bi bi-skype"></i>
                  </Link>
                  <Link to="/" className="linkedin">
                    <i className="bi bi-linkedin"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-6 mt-4 d-flex align-items-stretch">
              <div className="info-box">
                <i className="bx bx-envelope"></i>
                <h3>Email Me</h3>
                <p>
                  {" "}
                  <a href="mailto:info@yoursite.com">
                    <span>dhurvprajapati.ce@gmail.com</span>
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-6 mt-4 d-flex align-items-stretch">
              <div className="info-box">
                <i className="bx bx-phone-call"></i>
                <h3>Call Me</h3>
                <p>
                  <a href="tel://9909066572">
                    <span>+91 99090 66572</span>
                  </a>
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleClick} className="php-email-form mt-4"
          >
            <div className="row">
              <div className="col-md-6 form-group">
                <input
                  type="text"
                  name="cname"
                  className="form-control"
                  id="cname"
                  placeholder="Your Name"
                  required
                  minLength={3}
                />
              </div>
              <div className="col-md-6 form-group mt-3 mt-md-0">
                <input
                  type="email"
                  className="form-control"
                  name="cemail"
                  id="cemail"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>
            <div className="form-group mt-3">
              <input
                type="text"
                className="form-control"
                name="csubject"
                id="csubject"
                placeholder="Subject"
                required
                minLength={5}
              />
            </div>
            <div className="form-group mt-3">
              <textarea
                className="form-control"
                name="description"
                id="description"
                rows="5"
                placeholder="Message"
                required
                minLength={10}
              ></textarea>
            </div>
            <div className="my-3">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              {/* <div className="sent-message">
                Your message has been sent. Thank you!
              </div> */}
            </div>
            <div className="text-center">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
