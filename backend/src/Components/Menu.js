import React from "react";
import { Link } from "react-router-dom";

const Menu = (props) => {
  
  return (
    <>
      <aside
        id="layout-menu"
        className="layout-menu menu-vertical menu bg-menu-theme"
      >
        <div className="app-brand demo">
          <Link to="/" className="app-brand-link">
            <span className="app-brand demo menu-text fw-bolder ms-2">
              Dhruv Prajapati
            </span>
          </Link>

          {/* <Link
            to="{alert('sd')}"
            className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none"
          >
            <i className="bx bx-chevron-left bx-sm align-middle"></i>
          </Link> */}
        </div>

        <div className="menu-inner-shadow"></div>

        <ul className="menu-inner py-1">
          {/* <!-- Dashboard --> */}
          <li className={`menu-item ${props.mode==='/'?'active':''}`}>
            <Link to="/" className="menu-link">
              <i className="menu-icon tf-icons bx bx-home-circle"></i>
              <div data-i18n="Analytics">Dashboard</div>
            </Link>
          </li>

          {/* <!-- Layouts --> */}
          <li className="menu-header small text-uppercase">
            <span className="menu-header-text">Pages</span>
          </li>
          <li className={`menu-item ${props.mode==='/contact_us'?'active':''}`}>
            <Link to="/contact_us" className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-dock-top"></i>
              <div data-i18n="Account Settings">Contact Us Report</div>
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Menu;
