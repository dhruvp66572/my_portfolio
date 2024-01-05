import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
  return (
    <>
    <header id="header" className="header-top">
    <div className="container">

      <h1><Link to="/">Dhruv Prajapati</Link></h1>
      <h2>
            I'm a passionate <span>Web Devloper</span> from India
          </h2>
      <nav id="navbar" className="navbar">
        <ul>
          <li><Link className={`nav-link ${props.mode==='home'?'active':''}`} to="/">Home</Link></li>
          <li><Link className={`nav-link ${props.mode==='about'?'active':''}`} to="/about">About</Link></li>
          <li><Link className={`nav-link ${props.mode==='resume'?'active':''}`} to="/resume">Resume</Link></li>
          {/* <li><Link className={`nav-link ${props.mode==='service'?'active':''}`} to="/services">Services</Link></li> */}
          <li><Link className={`nav-link ${props.mode==='portfolio'?'active':''}`} to="/portfolio">Portfolio</Link></li>
          <li><Link className={`nav-link ${props.mode==='contact'?'active':''}`}  to="/contact">Contact</Link></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      {/* </nav><!-- .navbar --> */}

      <div className="social-links">
        <Link to="#" className="twitter"><i className="bi bi-twitter"></i></Link>
        <Link to="#" className="facebook"><i className="bi bi-facebook"></i></Link>
        <Link to="#" className="instagram"><i className="bi bi-instagram"></i></Link>
        <Link to="#" className="linkedin"><i className="bi bi-linkedin"></i></Link>
      </div>
      </nav>
    </div>
  </header>
    </>
  )
}

export default Header