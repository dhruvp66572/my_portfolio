import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* <!-- ======= Header ======= --> */}
      <header id="header">
        <div className="container">
          <h1>
            <Link to="/">Dhruv Prajapati</Link>
          </h1>
          {/* <!-- Uncomment below if you prefer to use an image logo -->
      <!-- <Link to="index.html" className="mr-auto"><img src="assets/img/logo.png" alt="" className="img-fluid"></Link> --> */}
          <h2>
            I'm a passionate <span><b>Web Devloper</b></span> from India
          </h2>

          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/resume">
                  Resume
                </Link>
              </li>
              {/* <li>
                <Link className="nav-link" to="#services">
                  Services
                </Link>
              </li> */}
              <li>
                <Link className="nav-link" to="/portfolio">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
          {/* <!-- .navbar --> */}

          <div className="social-links">
            <a href="https://github.com/dhruvp66572" className="github" target="_blank">
              <i className="bi bi-github"></i>
            </a>
            <a href="#" className="facebook" target="_blank">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://www.instagram.com/dp__572/" className="instagram" target="_blank">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/dhruv-prajapati-088721260/" target="_blank" className="linkedin">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </header>
      {/* <!-- End Header --> */}
    </>
  );
};

export default Home;
