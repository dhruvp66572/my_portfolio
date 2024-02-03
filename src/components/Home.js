import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

const Home = () => {
  return (
   <>
     {/* <!-- Navbar Start --> */}
        <nav class="navbar" id="navbar">
            <div class="container flex flex-wrap items-center justify-between">
                <a class="navbar-brand md:me-8" href="index.html">
                    <img src="assets/images/logo-dark.png" class="inline-block dark:hidden" alt="" />
                    {/* <img src="assets/images/logo-light.png" class="hidden dark:inline-block" alt="" /> */}
                </a>

                <div class="nav-icons flex items-center lg_992:order-2 ms-auto md:ms-8">
                    {/* <!-- Navbar Button --> */}
                    <ul class="list-none menu-social mb-0">
                        <li class="inline">
                            <a href="#">
                                <span class="login-btn-primary"><span class="btn btn-icon btn-sm rounded-full bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white"><i class="uil uil-dribbble align-middle"></i></span></span>
                                <span class="login-btn-light"><span class="btn btn-icon btn-sm rounded-full bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700"><i class="uil uil-dribbble align-middle"></i></span></span>
                            </a>
                            <a href="#">
                                <span class="login-btn-primary"><span class="btn btn-icon btn-sm rounded-full bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white"><i class="uil uil-behance align-middle"></i></span></span>
                                <span class="login-btn-light"><span class="btn btn-icon btn-sm rounded-full bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700"><i class="uil uil-behance align-middle"></i></span></span>
                            </a>
                            <a href="#">
                                <span class="login-btn-primary"><span class="btn btn-icon btn-sm rounded-full bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white"><i class="uil uil-instagram align-middle"></i></span></span>
                                <span class="login-btn-light"><span class="btn btn-icon btn-sm rounded-full bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700"><i class="uil uil-instagram align-middle"></i></span></span>
                            </a>
                        </li>
                    </ul>
                    {/* <!-- Navbar Collapse Manu Button --> */}
                    <button data-collapse="menu-collapse" type="button" class="collapse-btn inline-flex items-center ms-2 text-dark dark:text-white lg_992:hidden" aria-controls="menu-collapse" aria-expanded="false">
                        <span class="sr-only">Navigation Menu</span>
                        <i class="mdi mdi-menu text-[24px]"></i>
                    </button>
                </div>

                {/* <!-- Navbar Manu --> */}
                <div class="navigation lg_992:order-1 lg_992:flex hidden me-auto" id="menu-collapse">
                    <ul class="navbar-nav" id="navbar-navlist">
                        <li class="nav-item">
                            <a class="nav-link active" href="#home">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#about">About Me</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#service">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#experience">Experience</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#project">Projects</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#blog">Blogs</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#contact">Contact Me</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        {/* <!-- Navbar End --> */}

   </>
  );
};

export default Home;
