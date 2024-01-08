import React from "react";

const Portfolioitem = () => {
  return (
    <div>
      <div
        id="glightbox-body"
        className="glightbox-container glightbox-clean"
        tabindex="-1"
        role="dialog"
        aria-hidden="false"
      >
        <div className="gloader visible" style="display: none;"></div>
        <div className="goverlay"></div>
        <div className="gcontainer">
          <div id="glightbox-slider" className="gslider">
            <div className="gslide loaded">
              <div className="gslide-inner-content">
                <div className="ginner-container desc-bottom">
                  <div className="gslide-media gslide-image">
                    <img
                      src="http://127.0.0.1:5500/assets/img/portfolio/portfolio-1.jpg"
                      alt=""
                      aria-labelledby="gSlideTitle_0"
                      className="zoomable"
                    />
                  </div>
                  <div className="gslide-description description-bottom">
                    <div className="gdesc-inner">
                      <h4 className="gslide-title" id="gSlideTitle_0">
                        App 1
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="gslide loaded current">
              <div className="gslide-inner-content">
                <div className="ginner-container desc-bottom">
                  <div className="gslide-media gslide-image">
                    <img
                      src="http://127.0.0.1:5500/assets/img/portfolio/portfolio-2.jpg"
                      alt=""
                      aria-labelledby="gSlideTitle_1"
                      className="zoomable"
                      style="max-height: calc(100vh - 85px)"
                    />
                  </div>
                  <div
                    className="gslide-description description-bottom"
                    style="max-width: 224px;"
                  >
                    <div className="gdesc-inner">
                      <h4 className="gslide-title" id="gSlideTitle_1">
                        Web 3
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="gslide loaded">
              <div className="gslide-inner-content">
                <div className="ginner-container desc-bottom">
                  <div className="gslide-media gslide-image">
                    <img
                      src="http://127.0.0.1:5500/assets/img/portfolio/portfolio-3.jpg"
                      alt=""
                      aria-labelledby="gSlideTitle_2"
                      className="zoomable"
                    />
                  </div>
                  <div className="gslide-description description-bottom">
                    <div className="gdesc-inner">
                      <h4 className="gslide-title" id="gSlideTitle_2">
                        App 2
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="gslide">
              <div className="gslide-inner-content">
                <div className="ginner-container">
                  <div className="gslide-media"></div>
                  <div className="gslide-description">
                    <div className="gdesc-inner">
                      <h4 className="gslide-title"></h4>
                      <div className="gslide-desc"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="gslide">
              <div className="gslide-inner-content">
                <div className="ginner-container">
                  <div className="gslide-media"></div>
                  <div className="gslide-description">
                    <div className="gdesc-inner">
                      <h4 className="gslide-title"></h4>
                      <div className="gslide-desc"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="gslide">
              <div className="gslide-inner-content">
                <div className="ginner-container">
                  <div className="gslide-media"></div>
                  <div className="gslide-description">
                    <div className="gdesc-inner">
                      <h4 className="gslide-title"></h4>
                      <div className="gslide-desc"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="gslide">
              <div className="gslide-inner-content">
                <div className="ginner-container">
                  <div className="gslide-media"></div>
                  <div className="gslide-description">
                    <div className="gdesc-inner">
                      <h4 className="gslide-title"></h4>
                      <div className="gslide-desc"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="gslide">
              <div className="gslide-inner-content">
                <div className="ginner-container">
                  <div className="gslide-media"></div>
                  <div className="gslide-description">
                    <div className="gdesc-inner">
                      <h4 className="gslide-title"></h4>
                      <div className="gslide-desc"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="gslide">
              <div className="gslide-inner-content">
                <div className="ginner-container">
                  <div className="gslide-media"></div>
                  <div className="gslide-description">
                    <div className="gdesc-inner">
                      <h4 className="gslide-title"></h4>
                      <div className="gslide-desc"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="gclose gbtn" aria-label="Close" data-taborder="3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 512 512"
              xml:space="preserve"
            >
              <g>
                <g>
                  <path d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306C514.019,27.23,514.019,14.135,505.943,6.058z"></path>
                </g>
              </g>
              <g>
                <g>
                  <path d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z"></path>
                </g>
              </g>
            </svg>
          </button>
          <button className="gprev gbtn" aria-label="Previous" data-taborder="2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 477.175 477.175"
              xml:space="preserve"
            >
              <g>
                <path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"></path>
              </g>
            </svg>
          </button>
          <button className="gnext gbtn" aria-label="Next" data-taborder="1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 477.175 477.175"
              xml:space="preserve"
            >
              {" "}
              <g>
                <path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"></path>
              </g>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portfolioitem;
