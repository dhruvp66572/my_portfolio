import React from "react";
import Header from "./Header";
import profile_img from '../assets/img/me.jpg'

const About = () => {
  return (
    <>
      <Header mode="about" />
      {/* <!-- ======= About Section ======= --> */}
      <section id="about" className="about section-show">
        {/* <!-- ======= About Me ======= --> */}
        <div className="about-me container">
          <div className="section-title">
            <h2>About</h2>
            <p>Learn more about me</p>
          </div>

          <div className="row">
            <div className="col-lg-4" data-aos="fade-right">
              <img src={profile_img} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3>Web Devloper</h3>
              <p className="fst-italic">
              🚀 Passionate web developer with expertise in front-end and back-end technologies. I specialize in creating seamless, responsive web applications that blend cutting-edge design with efficient functionality. Let's collaborate to bring your digital vision to life!
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Birthday:</strong> <span>22 sep 2004</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Website:</strong> <span>dhruvprapati.com</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Phone:</strong> <a href="tel://9909066572"><span>+91 99090 66572</span></a>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i> <strong>City:</strong>{" "}
                      <span>(Anjar-Kutch) Gujarat, India</span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i> <strong>Age:</strong>{" "}
                      <span>19</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Degree:</strong> <span>Bachelor</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Email:</strong>{" "}
                      <a href="mailto:info@yoursite.com"><span>dhurvprajapati.ce@gmail.com</span></a>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Freelance:</strong> <span>Available</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p>
              🌟 Greetings! I'm Dhruv Prajapati, a passionate and innovative web developer on a mission to craft digital wonders. With a keen eye for detail and a love for clean, functional design, I specialize in creating immersive online experiences. Proficient in both front-end and back-end technologies, I bring your ideas to life with a perfect blend of aesthetics and efficiency. Let's collaborate and elevate your online presence to new heights! 🚀
              </p>
            </div>
          </div>
        </div>
        {/* <!-- End About Me --> */}

        {/* <!-- ======= Counts ======= --> */}
        <div className="counts container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <i className="bi bi-emoji-smile"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="2"
                  data-purecounter-duration="0"
                  className="purecounter"
                >
                  10
                </span>
                <p>Happy Clients</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
              <div className="count-box">
                <i className="bi bi-journal-richtext"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="521"
                  data-purecounter-duration="0"
                  className="purecounter"
                >
                10
                </span>
                <p>Projects</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
              <div className="count-box">
                <i className="bi bi-headset"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="1463"
                  data-purecounter-duration="0"
                  className="purecounter"
                >
                  14
                </span>
                <p>Hours Of Support</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
              <div className="count-box">
                <i className="bi bi-award"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="24"
                  data-purecounter-duration="0"
                  className="purecounter"
                >
                  0
                </span>
                <p>Awards</p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Counts --> */}

        {/* <!-- ======= Skills  ======= --> */}
        <div className="skills container">
          <div className="section-title">
            <h2>Skills</h2>
          </div>

          <div className="row skills-content">
            <div className="col-lg-6">
              <div className="progress">
                <span className="skill">
                  React Js <i className="val">70%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="70"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">
                  Java <i className="val">55%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="55"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "55%" }}
                  ></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">
                  JavaScript <i className="val">60%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="65"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "65%" }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
            <div className="progress">
                <span className="skill">
                  Node Js <i className="val">80%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="55"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div> 
              <div className="progress">
                <span className="skill">
                  PHP <i className="val">80%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">
                  C++ <i className="val">90%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>

            
            </div>
          </div>
        </div>
        {/* <!-- End Skills --> */}

        {/* <!-- ======= Interests ======= --> */}
        <div className="interests container">
          <div className="section-title">
            <h2>Interests</h2>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-4">
              <div className="icon-box">
                <i className="ri-store-line" style={{ color: "#ffbb2c" }}></i>
                <h3>Lorem Ipsum</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
              <div className="icon-box">
                <i
                  className="ri-bar-chart-box-line"
                  style={{ color: "#5578ff" }}
                ></i>
                <h3>Dolor Sitema</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
              <div className="icon-box">
                <i
                  className="ri-calendar-todo-line"
                  style={{ color: "#e80368" }}
                ></i>
                <h3>Sed perspiciatis</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
              <div className="icon-box">
                <i
                  className="ri-paint-brush-line"
                  style={{ color: "#e361ff" }}
                ></i>
                <h3>Magni Dolores</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i
                  className="ri-database-2-line"
                  style={{ color: "#47aeff" }}
                ></i>
                <h3>Nemo Enim</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i
                  className="ri-gradienter-line"
                  style={{ color: "#ffa76e" }}
                ></i>
                <h3>Eiusmod Tempor</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i
                  className="ri-file-list-3-line"
                  style={{ color: "#11dbcf" }}
                ></i>
                <h3>Midela Teren</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i
                  className="ri-price-tag-2-line"
                  style={{ color: "#4233ff" }}
                ></i>
                <h3>Pira Neve</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i className="ri-anchor-line" style={{ color: "#b2904f" }}></i>
                <h3>Dirada Pack</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i className="ri-disc-line" style={{ color: "#b20969" }}></i>
                <h3>Moton Ideal</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i
                  className="ri-base-station-line"
                  style={{ color: "#ff5828" }}
                ></i>
                <h3>Verdo Park</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i
                  className="ri-fingerprint-line"
                  style={{ color: "#29cc61" }}
                ></i>
                <h3>Flavor Nivelanda</h3>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Interests --> */}

        {/* <!-- ======= Testimonials ======= --> */}
    {/* <div className="testimonials container">
      <div className="section-title">
        <h2>Testimonials</h2>
      </div>

      <div
        className="testimonials-slider swiper"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="testimonial-item">
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                Proin iaculis purus consequat sem cure digni ssim donec
                porttitora entum suscipit rhoncus. Accusantium quam,
                ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                risus at semper.
                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
              <img
                src="assets/img/testimonials/testimonials-1.jpg"
                className="testimonial-img"
                alt=""
              />
              <h3>Saul Goodman</h3>
              <h4>Ceo &amp; Founder</h4>
            </div>
          </div> */}
          {/* <!-- End testimonial item --> */}

          {/* <div className="swiper-slide">
            <div className="testimonial-item">
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                Export tempor illum tamen malis malis eram quae irure esse
                labore quem cillum quid cillum eram malis quorum velit fore
                eram velit sunt aliqua noster fugiat irure amet legam anim
                culpa.
                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
              <img
                src="assets/img/testimonials/testimonials-2.jpg"
                className="testimonial-img"
                alt=""
              />
              <h3>Sara Wilsson</h3>
              <h4>Designer</h4>
            </div>
          </div> */}
          {/* <!-- End testimonial item --> */}

          {/* <div className="swiper-slide">
            <div className="testimonial-item">
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                Enim nisi quem export duis labore cillum quae magna enim
                sint quorum nulla quem veniam duis minim tempor labore quem
                eram duis noster aute amet eram fore quis sint minim.
                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
              <img
                src="assets/img/testimonials/testimonials-3.jpg"
                className="testimonial-img"
                alt=""
              />
              <h3>Jena Karlis</h3>
              <h4>Store Owner</h4>
            </div>
          </div> */}
          {/* <!-- End testimonial item --> */}

          {/* <div className="swiper-slide">
            <div className="testimonial-item">
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                Fugiat enim eram quae cillum dolore dolor amet nulla culpa
                multos export minim fugiat minim velit minim dolor enim duis
                veniam ipsum anim magna sunt elit fore quem dolore labore
                illum veniam.
                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
              <img
                src="assets/img/testimonials/testimonials-4.jpg"
                className="testimonial-img"
                alt=""
              />
              <h3>Matt Brandon</h3>
              <h4>Freelancer</h4>
            </div>
          </div> */}
          {/* <!-- End testimonial item --> */}

          {/* <div className="swiper-slide">
            <div className="testimonial-item">
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                Quis quorum aliqua sint quem legam fore sunt eram irure
                aliqua veniam tempor noster veniam enim culpa labore duis
                sunt culpa nulla illum cillum fugiat legam esse veniam culpa
                fore nisi cillum quid.
                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
              <img
                src="assets/img/testimonials/testimonials-5.jpg"
                className="testimonial-img"
                alt=""
              />
              <h3>John Larson</h3>
              <h4>Entrepreneur</h4>
            </div>
          </div> */}
          {/* <!-- End testimonial item --> */}
        {/* </div>
        <div className="swiper-pagination"></div>
      </div>

      <div className="owl-carousel testimonials-carousel"></div>
    </div> */}
        {/* <!-- End Testimonials  --> */}
      </section>
    </>
  );
};

export default About;
