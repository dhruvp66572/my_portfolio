import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
  return (
  <>
{/* <!-- Loader Start --> */}
 {/* <div id="preloader">
    <div id="status">
        <div class="logo">
            <img src="assets/images/logo-icon-64.png" class="d-block mx-auto animate-[spin_10s_linear_infinite]" alt=""/>
        </div>
        <div class="justify-content-center">
            <div class="text-center">
                <h4 class="mb-0 mt-2 text-lg font-semibold">Dennis</h4>
            </div>
        </div>
    </div>
</div> */}
{/* <!-- Loader End --> */}

{/* <!-- Navbar Start --> */}
<nav class="navbar" id="navbar">
    <div class="container flex flex-wrap items-center justify-between">
        <a class="navbar-brand md:me-8" href="index.html">
            <img src="assets/images/logo-dark.png" class="inline-block dark:hidden" alt=""/>
            <img src="assets/images/logo-light.png" class="hidden dark:inline-block" alt=""/>
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
                <li class="nav-item active">
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
{/* {/* <!-- Navbar End --> */}

{/* <!-- Start Hero --> */}
<section class="relative pt-28 personal-wrapper overflow-hidden bg-amber-500/5 active" id="home">
    <div class="absolute inset-0" id="overlay"></div>
    <div class="container">
        <div class="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
            <div>
                <h4 class="font-bold lg:text-[40px] text-3xl lg:leading-normal leading-normal mb-4">Hey! I'm <br/><span class="typewrite text-amber-500" data-period="2000" data-type="[ &quot;Dennis Scott&quot;, &quot;Website Designer&quot;, &quot;Web Developer&quot;, &quot;UI/UX Designer&quot; ]"><span class="wrap">UI/UX </span></span></h4>
                <p class="text-slate-400 max-w-xl">Obviously I'm a Web Designer. Web Developer with over 7 years of experience. Experienced with all stages of the development.</p>
            
                <div class="mt-6">
                    <a href="#" class="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white rounded-md">Hire Me</a>
                    <a href="#" class="btn bg-amber-500/10 hover:bg-amber-500 border-amber-500/10 hover:border-amber-500 text-amber-500 hover:text-white rounded-md ms-1">Download CV</a>
                </div>
            </div>

            <div class="relative">
                <img src="assets/images/hero/2.png" alt=""/>

                <div class="absolute lg:bottom-20 md:bottom-10 bottom-2 ltr:md:-left-5 ltr:left-2 rtl:md:-right-5 rtl:right-2 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 m-3 w-44 text-center">
                    <span class="text-3xl font-medium mb-0"><span class="counter-value font-bold" data-target="125">125</span>+</span>
                    <h6 class="text-sm text-slate-400 mt-1">Project Completed</h6>
                </div>

                <div class="absolute lg:top-80 md:top-56 top-48 ltr:md:-right-0 ltr:right-2 rtl:md:-left-0 rtl:left-2 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 m-3 w-44 text-center">
                    <h6 class="font-semibold">Web Designer</h6>
                    <h6 class="text-sm text-slate-400 mt-1">7+ Years Experience</h6>
                </div>
            </div>
        </div>
    </div>
    {/* <!--end container--> */}
</section>
{/* <!--end section--> */}
<div class="relative">
    <div class="absolute block w-full h-auto bottom-[25px] z-1 left-0">
        <a href="#about"><i class="mdi mdi-arrow-down absolute top-0 left-0 right-0 text-center inline-flex items-center justify-center rounded-full bg-white dark:bg-slate-900 h-12 w-12 mx-auto shadow-md dark:shadow-gray-800"></i></a>
    </div>
</div>
{/* <!-- End Hero --> */}

{/* <!-- Start --> */}
<section class="relative md:py-24 py-16" id="about">
    <div class="container">
        <div class="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
            <div class="lg:col-span-5 lg:px-8">
                <div class="relative">
                    <div class="absolute inset-0 border dark:border-gray-800 rounded-full -mt-[10px] -ms-3 h-[100%] w-[100%] -z-1"></div>
                    <img src="assets/images/ab2.jpg" class="rounded-full shadow-md shadow-gray-200 dark:shadow-gray-800" alt=""/>

                    <div class="absolute lg:bottom-20 md:bottom-10 bottom-6 ltr:lg:-right-16 rtl:lg:-left-16 ltr:md:-right-8 rtl:md:-left-8 ltr:right-0 rtl:left-0 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 m-3 w-44 text-center">
                        <h6 class="font-semibold">Web Desinger</h6>
                        <span class="text-2xl font-medium text-amber-500 mb-0"><span class="counter-value font-bold" data-target="7">7</span>+</span>
                        <span class="text-sm text-slate-400">Years <br/> Experience</span>
                    </div>
                </div>
            </div>
            {/* <!--end col--> */}

            <div class="lg:col-span-7">
                <div class="lg:ms-5">
                    <h3 class="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">I'm a Passionate Web Designer</h3>

                    <p class="text-slate-400 max-w-xl text-[15px]">Obviously I'm a Web Designer. Web Developer with over 7 years of experience. Experienced with all stages of the development cycle for dynamic web projects. The as opposed to using 'Content here, content here', making it look like readable English.</p>
                    <p class="text-slate-400 max-w-xl text-[15px] mt-6">I'm a professional web designer. My motive is to build a best web design with my all years of experience.</p>
                
                    <div class="mt-6">
                        <a href="#project" class="btn bg-amber-500/10 hover:bg-amber-500 border-amber-500/10 hover:border-amber-500 text-amber-500 hover:text-white rounded-md me-2 mt-2">See Work</a>
                    </div>
                </div>
            </div>
            {/* <!--end grid--> */}
        </div>
        {/* <!--end grid--> */}
    </div>
    {/* <!--end container--> */}

    <div class="container md:mt-24 mt-16">
        <div class="grid grid-cols-1 pb-8 text-center">
            <h3 class="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">Hobbies &amp; Expertise</h3>

            <p class="text-slate-400 max-w-xl mx-auto text-[15px]">Obviously I'm a Web Designer. Web Developer with over 7 years of experience. Experienced with all stages of the development.</p>
        </div>
        {/* <!--end grid--> */}

        <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
            <div class="flex group shadow shadow-gray-200 dark:shadow-gray-800 dark:hover:shadow-gray-700 items-center p-3 rounded-lg bg-white dark:bg-slate-900">
                <div class="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-amber-500/10 group-hover:bg-amber-500 text-amber-500 group-hover:text-white text-center rounded-xl me-5 transition-all duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor h-5 w-5 rotate-45"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                </div>
                <div class="flex-1">
                    <h4 class="mb-0 text-[17px] font-medium">Developing</h4>
                </div>
            </div>
            {/* <!--end content--> */}
            
            <div class="flex group shadow shadow-gray-200 dark:shadow-gray-800 dark:hover:shadow-gray-700 items-center p-3 rounded-lg bg-white dark:bg-slate-900">
                <div class="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-amber-500/10 group-hover:bg-amber-500 text-amber-500 group-hover:text-white text-center rounded-xl me-5 transition-all duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-stop-circle h-5 w-5 rotate-45"><circle cx="12" cy="12" r="10"></circle><rect x="9" y="9" width="6" height="6"></rect></svg>
                </div>
                <div class="flex-1">
                    <h4 class="mb-0 text-[17px] font-medium">Mac OS</h4>
                </div>
            </div>
            {/* <!--end content--> */}
            
            <div class="flex group shadow shadow-gray-200 dark:shadow-gray-800 dark:hover:shadow-gray-700 items-center p-3 rounded-lg bg-white dark:bg-slate-900">
                <div class="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-amber-500/10 group-hover:bg-amber-500 text-amber-500 group-hover:text-white text-center rounded-xl me-5 transition-all duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-video h-5 w-5 rotate-45"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
                </div>
                <div class="flex-1">
                    <h4 class="mb-0 text-[17px] font-medium">Cinema</h4>
                </div>
            </div>
            {/* <!--end content--> */}

            <div class="flex group shadow shadow-gray-200 dark:shadow-gray-800 dark:hover:shadow-gray-700 items-center p-3 rounded-lg bg-white dark:bg-slate-900">
                <div class="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-amber-500/10 group-hover:bg-amber-500 text-amber-500 group-hover:text-white text-center rounded-xl me-5 transition-all duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-coffee h-5 w-5 rotate-45"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>
                </div>
                <div class="flex-1">
                    <h4 class="mb-0 text-[17px] font-medium">Coffee</h4>
                </div>
            </div>
            {/* <!--end content--> */}

            <div class="flex group shadow shadow-gray-200 dark:shadow-gray-800 dark:hover:shadow-gray-700 items-center p-3 rounded-lg bg-white dark:bg-slate-900">
                <div class="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-amber-500/10 group-hover:bg-amber-500 text-amber-500 group-hover:text-white text-center rounded-xl me-5 transition-all duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-music h-5 w-5 rotate-45"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
                </div>
                <div class="flex-1">
                    <h4 class="mb-0 text-[17px] font-medium">Music</h4>
                </div>
            </div>
            {/* <!--end content--> */}
            
            <div class="flex group shadow shadow-gray-200 dark:shadow-gray-800 dark:hover:shadow-gray-700 items-center p-3 rounded-lg bg-white dark:bg-slate-900">
                <div class="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-amber-500/10 group-hover:bg-amber-500 text-amber-500 group-hover:text-white text-center rounded-xl me-5 transition-all duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-watch h-5 w-5 rotate-45"><circle cx="12" cy="12" r="7"></circle><polyline points="12 9 12 12 13.5 13.5"></polyline><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path></svg>
                </div>
                <div class="flex-1">
                    <h4 class="mb-0 text-[17px] font-medium">Games</h4>
                </div>
            </div>
            {/* <!--end content--> */}

            <div class="flex group shadow shadow-gray-200 dark:shadow-gray-800 dark:hover:shadow-gray-700 items-center p-3 rounded-lg bg-white dark:bg-slate-900">
                <div class="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-amber-500/10 group-hover:bg-amber-500 text-amber-500 group-hover:text-white text-center rounded-xl me-5 transition-all duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-box h-5 w-5 rotate-45"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                </div>
                <div class="flex-1">
                    <h4 class="mb-0 text-[17px] font-medium">Designing</h4>
                </div>
            </div>
            {/* <!--end content--> */}

            <div class="flex group shadow shadow-gray-200 dark:shadow-gray-800 dark:hover:shadow-gray-700 items-center p-3 rounded-lg bg-white dark:bg-slate-900">
                <div class="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-amber-500/10 group-hover:bg-amber-500 text-amber-500 group-hover:text-white text-center rounded-xl me-5 transition-all duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-target h-5 w-5 rotate-45"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
                </div>
                <div class="flex-1">
                    <h4 class="mb-0 text-[17px] font-medium">Sports</h4>
                </div>
            </div>
            {/* <!--end content--> */}

            <div class="flex group shadow shadow-gray-200 dark:shadow-gray-800 dark:hover:shadow-gray-700 items-center p-3 rounded-lg bg-white dark:bg-slate-900">
                <div class="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-amber-500/10 group-hover:bg-amber-500 text-amber-500 group-hover:text-white text-center rounded-xl me-5 transition-all duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-pen-tool h-5 w-5 rotate-45"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
                </div>
                <div class="flex-1">
                    <h4 class="mb-0 text-[17px] font-medium">Painting</h4>
                </div>
            </div>
            {/* <!--end content--> */}

            <div class="flex group shadow shadow-gray-200 dark:shadow-gray-800 dark:hover:shadow-gray-700 items-center p-3 rounded-lg bg-white dark:bg-slate-900">
                <div class="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-amber-500/10 group-hover:bg-amber-500 text-amber-500 group-hover:text-white text-center rounded-xl me-5 transition-all duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-book h-5 w-5 rotate-45"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                </div>
                <div class="flex-1">
                    <h4 class="mb-0 text-[17px] font-medium">Reading</h4>
                </div>
            </div>
            {/* <!--end content--> */}

            <div class="flex group shadow shadow-gray-200 dark:shadow-gray-800 dark:hover:shadow-gray-700 items-center p-3 rounded-lg bg-white dark:bg-slate-900">
                <div class="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-amber-500/10 group-hover:bg-amber-500 text-amber-500 group-hover:text-white text-center rounded-xl me-5 transition-all duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-smartphone h-5 w-5 rotate-45"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                </div>
                <div class="flex-1">
                    <h4 class="mb-0 text-[17px] font-medium">Android</h4>
                </div>
            </div>
            {/* <!--end content--> */}

            <div class="flex group shadow shadow-gray-200 dark:shadow-gray-800 dark:hover:shadow-gray-700 items-center p-3 rounded-lg bg-white dark:bg-slate-900">
                <div class="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-amber-500/10 group-hover:bg-amber-500 text-amber-500 group-hover:text-white text-center rounded-xl me-5 transition-all duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-activity h-5 w-5 rotate-45"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                </div>
                <div class="flex-1">
                    <h4 class="mb-0 text-[17px] font-medium">Other Activity</h4>
                </div>
            </div>
            {/* <!--end content--> */}
        </div>
        {/* <!--end grid--> */}
    </div>
    {/* <!--end container--> */}
</section>
{/* <!--end section--> */}
{/* <!-- End --> */}

{/* <!-- Start --> */}
<section class="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="service">
    <div class="container">
        <div class="grid grid-cols-1 pb-8 text-center">
            <h3 class="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">What do i offer?</h3>

            <p class="text-slate-400 max-w-xl mx-auto text-[15px]">Obviously I'm a Web Designer. Web Developer with over 7 years of experience. Experienced with all stages of the development.</p>
        </div>
        {/* <!--end grid--> */}

        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
            {/* <!-- Content --> */}
            <div class="px-6 py-10 shadow shadow-gray-200 hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-white dark:bg-slate-900">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-airplay h-10 w-10 stroke-1 text-amber-500"><path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon></svg>

                <div class="content mt-7">
                    <a href="#" class="title h5 text-[17px] font-medium hover:text-amber-500">UX / UI Design</a>
                    <p class="text-slate-400 mt-3 text-[15px]">The phrasal sequence of the is now so that many campaign and benefit</p>
                    
                    <div class="mt-5">
                        <a href="#" class="hover:text-amber-500 dark:hover:text-amber-500 after:bg-amber-500 dark:text-white transition duration-500">Read More <i class="uil uil-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            {/* <!-- Content --> */}

            {/* <!-- Content --> */}
            <div class="px-6 py-10 shadow shadow-gray-200 hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-white dark:bg-slate-900">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-aperture h-10 w-10 stroke-1 text-amber-500"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>

                <div class="content mt-7">
                    <a href="#" class="title h5 text-[17px] font-medium hover:text-amber-500">Ios App Designer</a>
                    <p class="text-slate-400 mt-3 text-[15px]">The phrasal sequence of the is now so that many campaign and benefit</p>
                    
                    <div class="mt-5">
                        <a href="#" class="hover:text-amber-500 dark:hover:text-amber-500 after:bg-amber-500 dark:text-white transition duration-500">Read More <i class="uil uil-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            {/* <!-- Content --> */}

            {/* <!-- Content --> */}
            <div class="px-6 py-10 shadow shadow-gray-200 hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-white dark:bg-slate-900">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-camera h-10 w-10 stroke-1 text-amber-500"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>

                <div class="content mt-7">
                    <a href="#" class="title h5 text-[17px] font-medium hover:text-amber-500">Photography</a>
                    <p class="text-slate-400 mt-3 text-[15px]">The phrasal sequence of the is now so that many campaign and benefit</p>
                    
                    <div class="mt-5">
                        <a href="#" class="hover:text-amber-500 dark:hover:text-amber-500 after:bg-amber-500 dark:text-white transition duration-500">Read More <i class="uil uil-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            {/* <!-- Content --> */}

            {/* <!-- Content --> */}
            <div class="px-6 py-10 shadow shadow-gray-200 hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-white dark:bg-slate-900">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-compass h-10 w-10 stroke-1 text-amber-500"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>

                <div class="content mt-7">
                    <a href="#" class="title h5 text-[17px] font-medium hover:text-amber-500">Graphic Designer</a>
                    <p class="text-slate-400 mt-3 text-[15px]">The phrasal sequence of the is now so that many campaign and benefit</p>
                    
                    <div class="mt-5">
                        <a href="#" class="hover:text-amber-500 dark:hover:text-amber-500 after:bg-amber-500 dark:text-white transition duration-500">Read More <i class="uil uil-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            {/* <!-- Content --> */}

            {/* <!-- Content --> */}
            <div class="px-6 py-10 shadow shadow-gray-200 hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-white dark:bg-slate-900">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings h-10 w-10 stroke-1 text-amber-500"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>

                <div class="content mt-7">
                    <a href="#" class="title h5 text-[17px] font-medium hover:text-amber-500">Web Security</a>
                    <p class="text-slate-400 mt-3 text-[15px]">The phrasal sequence of the is now so that many campaign and benefit</p>
                    
                    <div class="mt-5">
                        <a href="#" class="hover:text-amber-500 dark:hover:text-amber-500 after:bg-amber-500 dark:text-white transition duration-500">Read More <i class="uil uil-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            {/* <!-- Content --> */}

            {/* <!-- Content --> */}
            <div class="px-6 py-10 shadow shadow-gray-200 hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 transition duration-500 rounded-2xl bg-white dark:bg-slate-900">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-watch h-10 w-10 stroke-1 text-amber-500"><circle cx="12" cy="12" r="7"></circle><polyline points="12 9 12 12 13.5 13.5"></polyline><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path></svg>

                <div class="content mt-7">
                    <a href="#" class="title h5 text-[17px] font-medium hover:text-amber-500">24 / 7</a>
                    <p class="text-slate-400 mt-3 text-[15px]">The phrasal sequence of the is now so that many campaign and benefit</p>
                    
                    <div class="mt-5">
                        <a href="#" class="hover:text-amber-500 dark:hover:text-amber-500 after:bg-amber-500 dark:text-white transition duration-500">Read More <i class="uil uil-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            {/* <!-- Content --> */}
        </div>
    </div>
    {/* <!--end container--> */}
</section>
{/* <!--end section--> */}
{/* <!-- End --> */}

{/* <!-- Start --> */}
<section class="py-20 w-full table relative bg-[url('../../assets/images/bg/bg2.html')] bg-no-repeat bg-center bg-cover">
    <div class="absolute inset-0 bg-slate-900/70"></div>
    <div class="container relative">
        <div class="grid grid-cols-1 pb-8 text-center">
            <h3 class="mb-4 md:text-2xl text-xl text-white font-semibold">I Am Available For Freelancer Projects.</h3>

            <p class="text-white/80 max-w-xl mx-auto text-[15px]">Obviously I'm a Web Designer. Web Developer with over 7 years of experience. Experienced with all stages of the development.</p>
        
            <div class="relative mt-8">
                <a href="#" class="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white rounded-md">Hire Me</a>
            </div>
        </div>
        {/* <!--end grid--> */}
    </div>
    {/* <!--end container--> */}
</section>
{/* <!--end section--> */}
{/* <!-- End --> */}

{/* <!-- Start --> */}
<section class="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="experience">
    <div class="container">
        <div class="grid grid-cols-1 pb-8 text-center">
            <h3 class="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">Work Experience</h3>

            <p class="text-slate-400 max-w-xl mx-auto text-[15px]">Obviously I'm a Web Designer. Web Developer with over 7 years of experience. Experienced with all stages of the development.</p>
        </div>
        {/* <!--end grid--> */}

        <div class="grid grid-cols-1 mt-8">
            <div class="relative after:content-[''] after:absolute after:top-0 ltr:md:after:right-0 ltr:md:after:left-0 rtl:md:after:left-0 rtl:md:after:right-0 after:w-px after:h-full md:after:m-auto after:border-s-2 after:border-dashed after:border-gray-200 dark:after:border-gray-700 ms-3 md:ms-0">
                {/* <!--Start content--> */}
                <div class="ms-8 md:ms-0 relative after:content-[''] after:absolute after:top-[9px] after:rounded-full after:z-10 after:w-2.5 after:h-2.5 after:bg-amber-500 md:after:mx-auto ltr:md:after:right-0 ltr:md:after:left-0 rtl:md:after:left-0 rtl:md:after:right-0 ltr:after:-left-9 rtl:after:-right-9 before:content-[''] before:absolute md:before:mx-auto ltr:md:before:right-0 ltr:md:before:left-0 ltr:before:-left-11 rtl:md:before:left-0 rtl:md:before:right-0 rtl:before:-right-11 before:rounded-full before:z-10 before:border-2 before:border-dashed before:border-gray-200 dark:before:border-gray-700 before:top-0 before:w-7 before:h-7 before:bg-white dark:before:bg-slate-900">
                    <div class="grid md:grid-cols-2">
                        <div class="md:text-end md:me-8 relative">
                            <img src="assets/images/logos/facebook-logo-2019.png" class="rounded-full h-9 w-9 md:ms-auto" alt=""/>
                            <h5 class="my-2 font-semibold text-lg">Facebook</h5>
                            <h6 class="text-sm mb-0">2019-21</h6>
                        </div>

                        <div class="ltr:float-left rtl:float-right text-start md:ms-8 mt-6 md:mt-0">
                            <h5 class="title mb-1 font-semibold">UX / UI Designer</h5>
                            <p class="mt-3 mb-0 text-slate-400 text-[15px]">The generated injected humour, or non-characteristic words etc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,</p>
                        </div>
                    </div>
                </div>
                
                {/* <!--End content--> */}

                {/* <!--Start content--> */}
                <div class="mt-12 ms-8 md:ms-0 relative after:content-[''] after:absolute after:top-[9px] after:rounded-full after:z-10 after:w-2.5 after:h-2.5 after:bg-amber-500 md:after:mx-auto ltr:md:after:right-0 ltr:md:after:left-0 ltr:after:-left-9 rtl:md:after:left-0 rtl:md:after:right-0 rtl:after:-right-9 before:content-[''] before:absolute md:before:mx-auto ltr:md:before:right-0 ltr:md:before:left-0 ltr:before:-left-11 rtl:md:before:left-0 rtl:md:before:right-0 rtl:before:-right-11 before:rounded-full before:z-10 before:border-2 before:border-dashed before:border-gray-200 dark:before:border-gray-700 before:top-0 before:w-7 before:h-7 before:bg-white dark:before:bg-slate-900">
                    <div class="grid md:grid-cols-2">
                        <div class="text-start md:ms-8 relative md:order-2">
                            <img src="assets/images/logos/google-logo.png" class="rounded-full h-9 w-9 md:me-auto" alt=""/>
                            <h5 class="my-2 font-semibold text-lg">Google Tech.</h5>
                            <h6 class="text-sm mb-0">2018-19</h6>
                        </div>

                        <div class="ltr:float-left rtl:float-right md:text-end md:me-8 mt-6 md:mt-0 md:order-1">
                            <h5 class="title mb-1 font-semibold">Sr. UX / UI Designer</h5>
                            <p class="mt-3 mb-0 text-slate-400 text-[15px]">The generated injected humour, or non-characteristic words etc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,</p>
                        </div>
                    </div>
                </div>
                
                {/* <!--End content--> */}

                {/* <!--Start content--> */}
                <div class="mt-12 ms-8 md:ms-0 relative after:content-[''] after:absolute after:top-[9px] after:rounded-full after:z-10 after:w-2.5 after:h-2.5 after:bg-amber-500 md:after:mx-auto ltr:md:after:right-0 ltr:md:after:left-0 ltr:after:-left-9 rtl:md:after:left-0 rtl:md:after:right-0 rtl:after:-right-9 before:content-[''] before:absolute md:before:mx-auto ltr:md:before:right-0 ltr:md:before:left-0 ltr:before:-left-11 rtl:md:before:left-0 rtl:md:before:right-0 rtl:before:-right-11 before:rounded-full before:z-10 before:border-2 before:border-dashed before:border-gray-200 dark:before:border-gray-700 before:top-0 before:w-7 before:h-7 before:bg-white dark:before:bg-slate-900">
                    <div class="grid md:grid-cols-2">
                        <div class="md:text-end md:me-8 relative">
                            <img src="assets/images/logos/lenovo-logo.png" class="rounded-full h-9 w-9 md:ms-auto" alt=""/>
                            <h5 class="my-2 font-semibold text-lg">Lenovo Ltd.</h5>
                            <h6 class="text-sm mb-0">2016-18</h6>
                        </div>

                        <div class="ltr:float-left rtl:float-right text-start md:ms-8 mt-6 md:mt-0">
                            <h5 class="title mb-1 font-semibold">Jr. UX / UI Designer</h5>
                            <p class="mt-3 mb-0 text-slate-400 text-[15px]">The generated injected humour, or non-characteristic words etc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,</p>
                        </div>
                    </div>
                </div>
                
                {/* <!--End content--> */}

                {/* <!--Start content--> */}
                <div class="mt-12 ms-8 md:ms-0 relative after:content-[''] after:absolute after:top-[9px] after:rounded-full after:z-10 after:w-2.5 after:h-2.5 after:bg-amber-500 md:after:mx-auto ltr:md:after:right-0 ltr:md:after:left-0 ltr:after:-left-9 rtl:md:after:left-0 rtl:md:after:right-0 rtl:after:-right-9 before:content-[''] before:absolute md:before:mx-auto ltr:md:before:right-0 ltr:md:before:left-0 ltr:before:-left-11 rtl:md:before:left-0 rtl:md:before:right-0 rtl:before:-right-11 before:rounded-full before:z-10 before:border-2 before:border-dashed before:border-gray-200 dark:before:border-gray-700 before:top-0 before:w-7 before:h-7 before:bg-white dark:before:bg-slate-900">
                    <div class="grid md:grid-cols-2">
                        <div class="text-start md:ms-8 relative md:order-2">
                            <img src="assets/images/logos/circle-logo.png" class="rounded-full h-9 w-9 md:me-auto" alt=""/>
                            <h5 class="my-2 font-semibold text-lg">Circle CI</h5>
                            <h6 class="text-sm mb-0">2015-16</h6>
                        </div>

                        <div class="ltr:float-left rtl:float-right md:text-end md:me-8 mt-6 md:mt-0 md:order-1">
                            <h5 class="title mb-1 font-semibold">Front-end Web Designer</h5>
                            <p class="mt-3 mb-0 text-slate-400 text-[15px]">The generated injected humour, or non-characteristic words etc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,</p>
                        </div>
                    </div>
                </div>
                
                {/* <!--End content--> */}
            </div>
        </div>
        {/* <!--end grid--> */}
    </div>
    {/* <!--end container--> */}
</section>
{/* <!--end section--> */}
{/* <!-- End --> */}

{/* <!-- Start --> */}
<section class="relative md:py-24 py-16" id="project">
    <div class="container">
        <div class="grid grid-cols-1 pb-8 text-center">
            <h3 class="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">My Work &amp; Projects</h3>

            <p class="text-slate-400 max-w-xl mx-auto text-[15px]">Obviously I'm a Web Designer. Web Developer with over 7 years of experience. Experienced with all stages of the development.</p>
        </div>
        {/* <!--end grid--> */}

        <div class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 mt-8 gap-[30px]">
            <div class="relative group overflow-hidden rounded-lg shadow shadow-slate-200 dark:shadow-gray-800">
                <img src="assets/images/works/1.jpg" alt=""/>
                <div class="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b to-slate-900 from-transparent transition-all duration-500"></div>
                <div class="absolute bottom-0 opacity-0 group-hover:opacity-100 m-6 transition-all duration-500">
                    <a href="#" class="text-white hover:text-amber-500 font-semibold transition-all duration-500">Fronter Theme</a>
                    <span class="block text-sm text-slate-400">UI / UX Design</span>
                </div>

                <div class="absolute z-10 opacity-0 group-hover:opacity-100 top-1/2 -translate-y-1/2 right-0 left-0 mx-auto text-center transition-all duration-500">
                    <a href="assets/images/works/1.jpg" class="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white btn-icon rounded-full lightbox"><i class="uil uil-camera"></i></a>
                </div>
            </div>
            {/* <!--end content--> */}
            
            <div class="relative group overflow-hidden rounded-lg shadow shadow-slate-200 dark:shadow-gray-800">
                <img src="assets/images/works/2.jpg" alt=""/>
                <div class="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b to-slate-900 from-transparent transition-all duration-500"></div>
                <div class="absolute bottom-0 opacity-0 group-hover:opacity-100 m-6 transition-all duration-500">
                    <a href="#" class="text-white hover:text-amber-500 font-semibold transition-all duration-500">Landrick Theme</a>
                    <span class="block text-sm text-slate-400">Technology</span>
                </div>

                <div class="absolute z-10 opacity-0 group-hover:opacity-100 top-1/2 -translate-y-1/2 right-0 left-0 mx-auto text-center transition-all duration-500">
                    <a href="assets/images/works/2.jpg" class="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white btn-icon rounded-full lightbox"><i class="uil uil-camera"></i></a>
                </div>
            </div>
            {/* <!--end content--> */}
            
            <div class="relative group overflow-hidden rounded-lg shadow shadow-slate-200 dark:shadow-gray-800">
                <img src="assets/images/works/3.jpg" alt=""/>
                <div class="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b to-slate-900 from-transparent transition-all duration-500"></div>
                <div class="absolute bottom-0 opacity-0 group-hover:opacity-100 m-6 transition-all duration-500">
                    <a href="#" class="text-white hover:text-amber-500 font-semibold transition-all duration-500">Valexy Theme</a>
                    <span class="block text-sm text-slate-400">Landing</span>
                </div>

                <div class="absolute z-10 opacity-0 group-hover:opacity-100 top-1/2 -translate-y-1/2 right-0 left-0 mx-auto text-center transition-all duration-500">
                    <a href="assets/images/works/3.jpg" class="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white btn-icon rounded-full lightbox"><i class="uil uil-camera"></i></a>
                </div>
            </div>
            {/* <!--end content--> */}
            
            <div class="relative group overflow-hidden rounded-lg shadow shadow-slate-200 dark:shadow-gray-800">
                <img src="assets/images/works/4.jpg" alt=""/>
                <div class="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b to-slate-900 from-transparent transition-all duration-500"></div>
                <div class="absolute bottom-0 opacity-0 group-hover:opacity-100 m-6 transition-all duration-500">
                    <a href="#" class="text-white hover:text-amber-500 font-semibold transition-all duration-500">Superex Theme</a>
                    <span class="block text-sm text-slate-400">Digital</span>
                </div>

                <div class="absolute z-10 opacity-0 group-hover:opacity-100 top-1/2 -translate-y-1/2 right-0 left-0 mx-auto text-center transition-all duration-500">
                    <a href="assets/images/works/4.jpg" class="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white btn-icon rounded-full lightbox"><i class="uil uil-camera"></i></a>
                </div>
            </div>
            {/* <!--end content--> */}
            
            <div class="relative group overflow-hidden rounded-lg shadow shadow-slate-200 dark:shadow-gray-800">
                <img src="assets/images/works/5.jpg" alt=""/>
                <div class="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b to-slate-900 from-transparent transition-all duration-500"></div>
                <div class="absolute bottom-0 opacity-0 group-hover:opacity-100 m-6 transition-all duration-500">
                    <a href="#" class="text-white hover:text-amber-500 font-semibold transition-all duration-500">Motos Theme</a>
                    <span class="block text-sm text-slate-400">Landing</span>
                </div>

                <div class="absolute z-10 opacity-0 group-hover:opacity-100 top-1/2 -translate-y-1/2 right-0 left-0 mx-auto text-center transition-all duration-500">
                    <a href="assets/images/works/5.jpg" class="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white btn-icon rounded-full lightbox"><i class="uil uil-camera"></i></a>
                </div>
            </div>
            {/* <!--end content--> */}
            
            <div class="relative group overflow-hidden rounded-lg shadow shadow-slate-200 dark:shadow-gray-800">
                <img src="assets/images/works/6.jpg" alt=""/>
                <div class="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b to-slate-900 from-transparent transition-all duration-500"></div>
                <div class="absolute bottom-0 opacity-0 group-hover:opacity-100 m-6 transition-all duration-500">
                    <a href="#" class="text-white hover:text-amber-500 font-semibold transition-all duration-500">Giglink Theme</a>
                    <span class="block text-sm text-slate-400">Digital</span>
                </div>

                <div class="absolute z-10 opacity-0 group-hover:opacity-100 top-1/2 -translate-y-1/2 right-0 left-0 mx-auto text-center transition-all duration-500">
                    <a href="assets/images/works/6.jpg" class="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white btn-icon rounded-full lightbox"><i class="uil uil-camera"></i></a>
                </div>
            </div>
            {/* <!--end content--> */}
            
            <div class="relative group overflow-hidden rounded-lg shadow shadow-slate-200 dark:shadow-gray-800">
                <img src="assets/images/works/7.jpg" alt=""/>
                <div class="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b to-slate-900 from-transparent transition-all duration-500"></div>
                <div class="absolute bottom-0 opacity-0 group-hover:opacity-100 m-6 transition-all duration-500">
                    <a href="#" class="text-white hover:text-amber-500 font-semibold transition-all duration-500">Upwind Theme</a>
                    <span class="block text-sm text-slate-400">Landing</span>
                </div>

                <div class="absolute z-10 opacity-0 group-hover:opacity-100 top-1/2 -translate-y-1/2 right-0 left-0 mx-auto text-center transition-all duration-500">
                    <a href="assets/images/works/7.jpg" class="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white btn-icon rounded-full lightbox"><i class="uil uil-camera"></i></a>
                </div>
            </div>
            {/* <!--end content--> */}
            
            <div class="relative group overflow-hidden rounded-lg shadow shadow-slate-200 dark:shadow-gray-800">
                <img src="assets/images/works/8.jpg" alt=""/>
                <div class="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b to-slate-900 from-transparent transition-all duration-500"></div>
                <div class="absolute bottom-0 opacity-0 group-hover:opacity-100 m-6 transition-all duration-500">
                    <a href="#" class="text-white hover:text-amber-500 font-semibold transition-all duration-500">Techwind Theme</a>
                    <span class="block text-sm text-slate-400">Multipurpose</span>
                </div>

                <div class="absolute z-10 opacity-0 group-hover:opacity-100 top-1/2 -translate-y-1/2 right-0 left-0 mx-auto text-center transition-all duration-500">
                    <a href="assets/images/works/8.jpg" class="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white btn-icon rounded-full lightbox"><i class="uil uil-camera"></i></a>
                </div>
            </div>
            {/* <!--end content--> */}
        </div>
        {/* <!--end grid--> */}
    </div>
    {/* <!--end container--> */}
</section>
{/* <!--end section--> */}
{/* <!-- End --> */}

{/* <!-- Start --> */}
<section class="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="testi">
    <div class="container">
        <div class="grid grid-cols-1 pb-8 text-center">
            <h3 class="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">Client's Review</h3>

            <p class="text-slate-400 max-w-xl mx-auto text-[15px]">Obviously I'm a Web Designer. Web Developer with over 7 years of experience. Experienced with all stages of the development.</p>
        </div>
        {/* <!--end grid--> */}

        <div class="grid relative grid-cols-1 mt-6">
            <div class="tns-outer" id="tns1-ow"><div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">2 to 4</span>  of 6</div><div id="tns1-mw" class="tns-ovh"><div class="tns-inner" id="tns1-iw"><div class="tiny-three-item  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal" id="tns1" style={{transform: "translate3d(-16.6667%, 0px, 0px)"}}>
                <div class="tiny-slide tns-item" id="tns1-item0" aria-hidden="true" tabindex="-1">
                    {/* <!-- Content --> */}
                    <div class="customer-testi">
                        <div class="content relative rounded shadow shadow-gray-200 dark:shadow-gray-800 m-2 p-6 bg-white dark:bg-slate-900">
                            <i class="mdi mdi-format-quote-open mdi-48px text-amber-500"></i>
                            <p class="text-slate-400 text-[15px]">I didn't know a thing about icon design until I read this book. Now I can create any icon I need in no time. Great resource!</p>
                            <ul class="list-none mb-0 text-amber-400 mt-3">
                                <li class="inline"><i class="mdi mdi-star"></i></li>
                                <li class="inline"><i class="mdi mdi-star"></i></li>
                                <li class="inline"><i class="mdi mdi-star"></i></li>
                                <li class="inline"><i class="mdi mdi-star"></i></li>
                                <li class="inline"><i class="mdi mdi-star"></i></li>
                            </ul>
                        </div>
                        
                        <div class="text-center mt-5">
                            <img src="assets/images/client/01.jpg" class="h-14 w-14 rounded-full shadow-md mx-auto mb-1" alt=""/>
                            <a href="#" class="text-base font-medium h5 hover:text-amber-500 duration-500 ease-in-out">Thomas Israel</a>
                            <span class="text-slate-400 text-sm block">Manager</span>
                        </div>
                    </div>
                    {/* <!-- Content --> */}
                </div>
                
                <div class="tiny-slide tns-item tns-slide-active" id="tns1-item1">
                    {/* <!-- Content --> */}
                    <div class="customer-testi">
                        <div class="content relative rounded shadow shadow-gray-200 dark:shadow-gray-800 m-2 p-6 bg-white dark:bg-slate-900">
                            <i class="mdi mdi-format-quote-open mdi-48px text-amber-500"></i>
                            <p class="text-slate-400 text-[15px]">There are so many things I had to do with my old software that I just don't do at all with Techwind. Suspicious but I can't say I don't love it.</p>
                            <ul class="list-none mb-0 text-amber-400 mt-3">
                                <li class="inline"><i class="mdi mdi-star"></i></li>
                                <li class="inline"><i class="mdi mdi-star"></i></li>
                                <li class="inline"><i class="mdi mdi-star"></i></li>
                                <li class="inline"><i class="mdi mdi-star"></i></li>
                                <li class="inline"><i class="mdi mdi-star"></i></li>
                            </ul>
                        </div>
                        
                        <div class="text-center mt-5">
                            <img src="assets/images/client/02.jpg" class="h-14 w-14 rounded-full shadow-md mx-auto mb-1" alt=""/>
                            <a href="#" class="text-base font-medium h5 hover:text-amber-500 duration-500 ease-in-out">Barbara McIntosh</a>
                            <span class="text-slate-400 text-sm block">Manager</span>
                        </div>
                    </div>
                    {/* <!-- Content --> */}
                </div>
                
                <div class="tiny-slide tns-item tns-slide-active" id="tns1-item2">
                    {/* <!-- Content --> */}
                    <div class="customer-testi">
                        <div class="content relative rounded shadow shadow-gray-200 dark:shadow-gray-800 m-2 p-6 bg-white dark:bg-slate-900">
                            <i class="mdi mdi-format-quote-open mdi-48px text-amber-500"></i>
                            <p class="text-slate-400 text-[15px]">The best part about Techwind is every time I pay my employees, my bank balance doesn't go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.</p>
                            <ul class="list-none mb-0 text-amber-400 mt-3">
                                <li class="inline"><i class="mdi mdi-star"></i></li>
                                <li class="inline"><i class="mdi mdi-star"></i></li>
                                <li class="inline"><i class="mdi mdi-star"></i></li>
                                <li class="inline"><i class="mdi mdi-star"></i></li>
                                <li class="inline"><i class="mdi mdi-star"></i></li>
                            </ul>
                        </div>
                        
                        <div class="text-center mt-5">
                            <img src="assets/images/client/03.jpg" class="h-14 w-14 rounded-full shadow-md mx-auto mb-1" alt=""/>
                            <a href="#" class="text-base font-medium h5 hover:text-amber-500 duration-500 ease-in-out">Carl Oliver</a>
                            <span class="text-slate-400 text-sm block">Manager</span>
                        </div>
                    </div>
                    {/* <!-- Content --> */}
                </div>
                
                <div class="tiny-slide tns-item tns-slide-active" id="tns1-item3">
                    {/* <!-- Content --> */}
                    <div class="customer-testi">
                        <div class="content relative rounded shadow shadow-gray-200 dark:shadow-gray-800 m-2 p-6 bg-white dark:bg-slate-900">
                            <i class="mdi mdi-format-quote-open mdi-48px text-amber-500"></i>
                            <p class="text-slate-400 text-[15px]">I'm trying to get a hold of someone in support, I'm in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away.</p>
                            <ul class="list-none mb-0 text-amber-400 mt-3">
                                <li class="inline"><i class="mdi mdi-star"></i></li>
                                <li class="inline"><i class="mdi mdi-star"></i></li>
                                <li class="inline"><i class="mdi mdi-star"></i></li>
                                <li class="inline"><i class="mdi mdi-star"></i></li>
                                <li class="inline"><i class="mdi mdi-star"></i></li>
                            </ul>
                        </div>
                        
                        <div class="text-center mt-5">
                            <img src="assets/images/client/04.jpg" class="h-14 w-14 rounded-full shadow-md mx-auto mb-1" alt=""/>
                            <a href="#" class="text-base font-medium h5 hover:text-amber-500 duration-500 ease-in-out">Jill Webb</a>
                            <span class="text-slate-400 text-sm block">Manager</span>
                        </div>
                    </div>
                    {/* <!-- Content --> */}
                </div>
                
                <div class="tiny-slide tns-item" id="tns1-item4" aria-hidden="true" tabindex="-1">
                    {/* <!-- Content --> */}
                    <div class="customer-testi">
                        <div class="content relative rounded shadow shadow-gray-200 dark:shadow-gray-800 m-2 p-6 bg-white dark:bg-slate-900">
                            <i class="mdi mdi-format-quote-open mdi-48px text-amber-500"></i>
                            <p class="text-slate-400 text-[15px]">I used to have to remit tax to the EU and with Techwind I somehow don't have to do that anymore. Nervous to travel there now though.</p>
                            <ul class="list-none mb-0 text-amber-400 mt-3">
                                <li class="inline"><i class="mdi mdi-star"></i></li>
                                <li class="inline"><i class="mdi mdi-star"></i></li>
                                <li class="inline"><i class="mdi mdi-star"></i></li>
                                <li class="inline"><i class="mdi mdi-star"></i></li>
                                <li class="inline"><i class="mdi mdi-star"></i></li>
                            </ul>
                        </div>
                        
                        <div class="text-center mt-5">
                            <img src="assets/images/client/05.jpg" class="h-14 w-14 rounded-full shadow-md mx-auto mb-1" alt=""/>
                            <a href="#" class="text-base font-medium h5 hover:text-amber-500 duration-500 ease-in-out">Barbara McIntosh</a>
                            <span class="text-slate-400 text-sm block">Manager</span>
                        </div>
                    </div>
                    {/* <!-- Content --> */}
                </div>
                
                <div class="tiny-slide tns-item" id="tns1-item5" aria-hidden="true" tabindex="-1">
                    {/* <!-- Content --> */}
                    <div class="customer-testi">
                        <div class="content relative rounded shadow shadow-gray-200 dark:shadow-gray-800 m-2 p-6 bg-white dark:bg-slate-900">
                            <i class="mdi mdi-format-quote-open mdi-48px text-amber-500"></i>
                            <p class="text-slate-400 text-[15px]">This is the fourth email I've sent to your support team. I am literally being held in jail for tax fraud. Please answer your damn emails, this is important.</p>
                            <ul class="list-none mb-0 text-amber-400 mt-3">
                                <li class="inline"><i class="mdi mdi-star"></i></li>
                                <li class="inline"><i class="mdi mdi-star"></i></li>
                                <li class="inline"><i class="mdi mdi-star"></i></li>
                                <li class="inline"><i class="mdi mdi-star"></i></li>
                                <li class="inline"><i class="mdi mdi-star"></i></li>
                            </ul>
                        </div>
                        
                        <div class="text-center mt-5">
                            <img src="assets/images/client/06.jpg" class="h-14 w-14 rounded-full shadow-md mx-auto mb-1" alt=""/>
                            <a href="#" class="text-base font-medium h5 hover:text-amber-500 duration-500 ease-in-out">Janisha Doll</a>
                            <span class="text-slate-400 text-sm block">Manager</span>
                        </div>
                    </div>
                    {/* <!-- Content --> */}
                </div>
            </div></div></div><div class="tns-nav" aria-label="Carousel Pagination"><button type="button" data-nav="0" aria-controls="tns1"  aria-label="Carousel Page 1 (Current Slide)" class="tns-nav-active"></button><button type="button" data-nav="1" aria-controls="tns1" aria-label="Carousel Page 2" class="" tabindex="-1"></button><button type="button" data-nav="2" tabindex="-1" aria-controls="tns1" style={{display:"none"}} aria-label="Carousel Page 3"></button><button type="button" data-nav="3" tabindex="-1" aria-controls="tns1" style={{display:"none"}} aria-label="Carousel Page 4"></button><button type="button" data-nav="4" tabindex="-1" aria-controls="tns1" style={{display:"none"}} aria-label="Carousel Page 5"></button><button type="button" data-nav="5" tabindex="-1" aria-controls="tns1" style={{display:"none"}} aria-label="Carousel Page 6"></button></div></div>
        </div>
        {/* <!--end grid--> */}
    </div>
    {/* <!--end container--> */}
</section>
{/* <!--end section--> */}
{/* <!-- End --> */}

{/* <!-- Start --> */}
<section class="relative md:py-24 py-16" id="blog">
    <div class="container">
        <div class="grid grid-cols-1 pb-8 text-center">
            <h3 class="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">Blogs or News</h3>

            <p class="text-slate-400 max-w-xl mx-auto text-[15px]">Obviously I'm a Web Designer. Web Developer with over 7 years of experience. Experienced with all stages of the development.</p>
        </div>
        {/* <!--end grid--> */}

        <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px] mt-8">
            <div class="blog relative rounded-lg shadow shadow-slate-200 dark:shadow-gray-800 overflow-hidden">
                <img src="assets/images/blog/01_giglink.jpg" alt=""/>

                <div class="content p-6">
                    <a href="#" class="text-[17px] hover:text-amber-500 dark:text-white dark:hover:text-amber-500 transition duration-500 ease-in-out font-medium h5">Giglink: Tailwind CSS NFT Marketplace Template</a>
                    <p class="text-slate-400 mt-3 text-[15px]">The phrasal sequence of the is now so that many campaign and benefit</p>
                    
                    <div class="mt-5">
                        <a href="#" class="hover:text-amber-500 dark:hover:text-amber-500 after:bg-amber-500 dark:text-white transition duration-500">Read More <i class="uil uil-arrow-right"></i></a>
                    </div>
                </div>
            </div>

            <div class="blog relative rounded-lg shadow shadow-slate-200 dark:shadow-gray-800 overflow-hidden">
                <img src="assets/images/blog/01_techwind.jpg" alt=""/>

                <div class="content p-6">
                    <a href="#" class="text-[17px] hover:text-amber-500 dark:text-white dark:hover:text-amber-500 transition duration-500 ease-in-out font-medium h5">Techwind: Tailwind CSS Multipurpose Template</a>
                    <p class="text-slate-400 mt-3 text-[15px]">The phrasal sequence of the is now so that many campaign and benefit</p>
                    
                    <div class="mt-5">
                        <a href="#" class="hover:text-amber-500 dark:hover:text-amber-500 after:bg-amber-500 dark:text-white transition duration-500">Read More <i class="uil uil-arrow-right"></i></a>
                    </div>
                </div>
            </div>

            <div class="blog relative rounded-lg shadow shadow-slate-200 dark:shadow-gray-800 overflow-hidden">
                <img src="assets/images/blog/01_upwind.jpg" alt=""/>

                <div class="content p-6">
                    <a href="#" class="text-[17px] hover:text-amber-500 dark:text-white dark:hover:text-amber-500 transition duration-500 ease-in-out font-medium h5">Upwind: Tailwind CSS Landing Page Template</a>
                    <p class="text-slate-400 mt-3 text-[15px]">The phrasal sequence of the is now so that many campaign and benefit</p>
                    
                    <div class="mt-5">
                        <a href="#" class="hover:text-amber-500 dark:hover:text-amber-500 after:bg-amber-500 dark:text-white transition duration-500">Read More <i class="uil uil-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
        {/* <!--end grid--> */}
    </div>
    {/* <!--end container--> */}
</section>
{/* <!--end section--> */}
{/* <!-- End --> */}

{/* <!-- Start --> */}
<section class="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="contact">
    <div class="container">
        <div class="grid grid-cols-1 pb-8 text-center">
            <h3 class="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">Get In Touch !</h3>

            <p class="text-slate-400 max-w-xl mx-auto text-[15px]">Obviously I'm a Web Designer. Web Developer with over 7 years of experience. Experienced with all stages of the development.</p>
        </div>
        {/* <!--end grid--> */}

        <div class="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 mt-8 items-center gap-[30px]">
            <div class="lg:col-span-8">
                <div class="p-6 rounded-md shadow bg-white dark:bg-slate-900">
                    <form method="post" name="myForm" id="myForm" onsubmit="return validateForm()">
                        <p class="mb-0" id="error-msg"></p>
                        <div id="simple-msg"></div>
                        <div class="grid lg:grid-cols-12 lg:gap-5">
                            <div class="lg:col-span-6 mb-5">
                                <input name="name" id="name" type="text" class="form-input w-full py-2 px-3 border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded h-10 outline-none bg-transparent focus:border-amber-500/50 dark:focus:border-amber-500/50 focus:shadow-none focus:ring-0 text-[15px]" placeholder="Name :"/>
                            </div>

                            <div class="lg:col-span-6 mb-5">
                                <input name="email" id="email" type="email" class="form-input w-full py-2 px-3 border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded h-10 outline-none bg-transparent focus:border-amber-500/50 dark:focus:border-amber-500/50 focus:shadow-none focus:ring-0 text-[15px]" placeholder="Email :"/>
                            </div>
                            {/* <!--end col--> */}
                        </div>

                        <div class="grid grid-cols-1">
                            <div class="mb-5">
                                <input name="subject" id="subject" class="form-input w-full py-2 px-3 border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded h-10 outline-none bg-transparent focus:border-amber-500/50 dark:focus:border-amber-500/50 focus:shadow-none focus:ring-0 text-[15px]" placeholder="Subject :"/>
                            </div>

                            <div class="mb-5">
                                <textarea name="comments" id="comments" class="form-input w-full py-2 px-3 border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded h-28 outline-none bg-transparent focus:border-amber-500/50 dark:focus:border-amber-500/50 focus:shadow-none focus:ring-0 text-[15px]" placeholder="Message :"></textarea>
                            </div>
                        </div>
                        <button type="submit" id="submit" name="send" class="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white rounded-md h-11 justify-center flex items-center">Send Message</button>
                    </form>
                </div>
            </div>

            <div class="lg:col-span-4">
                <div class="lg:ms-8">
                    <div class="flex">
                        <div class="icons text-center mx-auto">
                            <i class="uil uil-phone block rounded text-2xl dark:text-white mb-0"></i>
                        </div>

                        <div class="flex-1 ms-6">
                            <h5 class="text-[17px] dark:text-white mb-2 font-medium">Phone</h5>
                            <a href="tel:+152534-468-854" class="text-slate-400 text-[15px]">+152 534-468-854</a>
                        </div>
                    </div>

                    <div class="flex mt-4">
                        <div class="icons text-center mx-auto">
                            <i class="uil uil-envelope block rounded text-2xl dark:text-white mb-0"></i>
                        </div>

                        <div class="flex-1 ms-6">
                            <h5 class="text-[17px] dark:text-white mb-2 font-medium">Email</h5>
                            <a href="mailto:contact@example.com" class="text-slate-400 text-[15px]">contact@example.com</a>
                        </div>
                    </div>

                    <div class="flex mt-4">
                        <div class="icons text-center mx-auto">
                            <i class="uil uil-map-marker block rounded text-2xl dark:text-white mb-0"></i>
                        </div>

                        <div class="flex-1 ms-6">
                            <h5 class="text-[17px] dark:text-white mb-2 font-medium">Location</h5>
                            <p class="text-slate-400 text-[15px] mb-2">C/54 Northwest Freeway, Suite 558, Houston, USA 485</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!--end grid--> */}
    </div>
    {/* <!--end container--> */}
</section>
{/* <!--end section--> */}
{/* <!-- End --> */}

{/* <!-- Footer Start --> */}
<footer class="footer bg-dark-footer relative text-gray-200 dark:text-gray-200">
    <div class="py-[30px] px-0 border-t border-slate-800">
        <div class="container text-center">
            <div class="grid lg:grid-cols-12 md:grid-cols-3 grid-cols-1 items-center">
                <div class="lg:col-span-3 md:text-start text-center">
                    <a href="#" class="text-[22px] focus:outline-none">
                        <img src="assets/images/logo-light.png" class="mx-auto md:me-auto md:ms-0" alt=""/>
                    </a>
                </div>

                <div class="lg:col-span-5 text-center mt-6 md:mt-0">
                    <p class="mb-0">© <script>document.write(new Date().getFullYear())</script>2024 Dennis. Design with <i class="mdi mdi-heart text-red-600"></i> by <a href="https://shreethemes.in/" target="_blank" class="text-reset">Shreethemes</a>.</p>
                </div>

                <ul class="lg:col-span-4 list-none md:text-end text-center mt-6 md:mt-0">
                    <li class="inline"><a href="https://dribbble.com/shreethemes" target="_blank" class="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-amber-500 dark:hover:border-amber-500 hover:bg-amber-500 dark:hover:bg-amber-500"><i class="uil uil-dribbble align-middle" title="dribbble"></i></a></li>
                    <li class="inline"><a href="https://www.behance.net/shreethemes" target="_blank" class="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-amber-500 dark:hover:border-amber-500 hover:bg-amber-500 dark:hover:bg-amber-500"><i class="uil uil-behance" title="Behance"></i></a></li>
                    <li class="inline"><a href="http://linkedin.com/company/shreethemes" target="_blank" class="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-amber-500 dark:hover:border-amber-500 hover:bg-amber-500 dark:hover:bg-amber-500"><i class="uil uil-linkedin" title="Linkedin"></i></a></li>
                    <li class="inline"><a href="https://www.facebook.com/shreethemes" target="_blank" class="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-amber-500 dark:hover:border-amber-500 hover:bg-amber-500 dark:hover:bg-amber-500"><i class="uil uil-facebook-f align-middle" title="facebook"></i></a></li>
                    <li class="inline"><a href="https://www.instagram.com/shreethemes/" target="_blank" class="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-amber-500 dark:hover:border-amber-500 hover:bg-amber-500 dark:hover:bg-amber-500"><i class="uil uil-instagram align-middle" title="instagram"></i></a></li>
                    <li class="inline"><a href="https://twitter.com/shreethemes" target="_blank" class="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-amber-500 dark:hover:border-amber-500 hover:bg-amber-500 dark:hover:bg-amber-500"><i class="uil uil-twitter align-middle" title="twitter"></i></a></li>
                    <li class="inline"><a href="mailto:support@shreethemes.in" class="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-amber-500 dark:hover:border-amber-500 hover:bg-amber-500 dark:hover:bg-amber-500"><i class="uil uil-envelope align-middle" title="email"></i></a></li>
                </ul>
                {/* <!--end icon--> */}
            </div>
            {/* <!--end grid--> */}
        </div>
        {/* <!--end container--> */}
    </div>
</footer>
{/* <!--end footer--> */}
{/* <!-- Footer End --> */}

{/* <!-- Back to top --> */}
<a href="#" onclick="topFunction()" id="back-to-top" class="back-to-top fixed text-lg rounded-full z-10 bottom-5 right-5 h-9 w-9 text-center bg-amber-500 text-white leading-9 hidden"><i class="uil uil-arrow-up"></i></a>
{/* <!-- Back to top --> */}

{/* <!-- Switcher --> */}
{/* <div class="fixed top-1/4 -right-1 z-3">
    <span class="relative inline-block rotate-90">
        <input type="checkbox" class="checkbox opacity-0 absolute" id="chk" />
        <label class="label bg-slate-900 dark:bg-white shadow dark:shadow-gray-800 cursor-pointer rounded-full flex justify-between items-center p-1 w-14 h-8" for="chk">
            <i class="uil uil-moon text-[20px] text-yellow-500"></i>
            <i class="uil uil-sun text-[20px] text-yellow-500"></i>
            <span class="ball bg-white dark:bg-slate-900 rounded-full absolute top-[2px] left-[2px] w-7 h-7"></span>
        </label>
    </span>
</div> */}
{/* <script>
// <![CDATA[  <-- For SVG support
if ('WebSocket' in window) {
(function () {
function refreshCSS() {
var sheets = [].slice.call(document.getElementsByTagName("link"));
var head = document.getElementsByTagName("head")[0];
for (var i = 0; i < sheets.length; ++i) {
  var elem = sheets[i];
  var parent = elem.parentElement || head;
  parent.removeChild(elem);
  var rel = elem.rel;
  if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
    var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
    elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
  }
  parent.appendChild(elem);
}
}
var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
var address = protocol + window.location.host + window.location.pathname + '/ws';
var socket = new WebSocket(address);
socket.onmessage = function (msg) {
if (msg.data == 'reload') window.location.reload();
else if (msg.data == 'refreshcss') refreshCSS();
};
if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
console.log('Live reload enabled.');
sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
}
})();
}
else {
console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
}
// ]]>
</script> */}
<div
        class="ai-modal-container"
        style={{fontFamily: "'-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Noto Sans', 'Helvetica', 'Arial', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji'", lineheight: "18px"}}
      ></div>
      <div
        class="cgw-text-selection-popup"
        style={{fontFamily: "'-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Noto Sans', 'Helvetica', 'Arial', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji'", lineheight: "18px", position: "absolute"}}
      ></div>
  </>
  )
}

export default Header