import { React, useState, useEffect } from "react";
import Header from "./Header";
import Portfolioitem from "./Portfolioitem";


const Portfolio = () => {
  const [data, setData] = useState([]);
  const [pid, setPid] = useState("");
  const fetchalldata = async () => {
    // Get All  Data
    // API Call
    const response = await fetch(
      `http://localhost:5000/api/projects/fetchallprojects`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data1 = await response.json();
    setData(data1);
    console.log(data1.length);
    // console.log(data1[2]._id)
  };

  useEffect(() => {
    fetchalldata();
  }, []);

  const HandleonClick = (id) => {
    document.getElementById("portfolio").style.display = "none";
    document.getElementById("pitem").style.display = "block";
    console.log("clicked");
    setPid(id);
  };

  return (
    <>
      {/* <div> */}
        <Header mode="portfolio" />
        <div id="pitem" style={{ display: "none" }}>
          <Portfolioitem data={data} Pid={pid} />
        </div>
        <section id="portfolio" className="portfolio section-show" style={{height:"auto"}}>
          <div className="container">
            <div className="section-title">
              <h2>Portfolio</h2>
              <p>My Works</p>
            </div>
            {/* 
            <div className="row">
              <div className="col-lg-12 d-flex justify-content-center">
                <ul id="portfolio-flters">
                  <li data-filter="*" className="filter-active">
                    All
                  </li>
                  <li data-filter=".filter-app">App</li>
                  <li data-filter=".filter-card">Card</li>
                  <li data-filter=".filter-web">Web</li>
                </ul>
              </div>
            </div> */}

            <div
              className="row portfolio-container"
              style={{ position: "relative", height: "1000px"}}
            >
              {data.map((item) => {
                return (
                  <div
                    className="col-lg-4 portfolio-item filter-app"
                    // style={{ position: "absolute", left: "0px; top: 0px" }}
                  >
                    <div className="portfolio-wrap">
                      <img
                        src="D:/Rect Js/my_portfolio/public/assets/img/projectimg/demo.png"
                        className="img-fluid"
                        alt="!!!!!!!!"
                      />
                      <div className="portfolio-info">
                        <h4>{item.pname}</h4>
                        {/* <p>App</p>  */}
                        <div className="portfolio-links">
                          <div
                            onClick={() => {
                              HandleonClick(item._id);
                            }}
                            data-gallery="portfolioDetailsGallery"
                            data-glightbox="type: external"
                            className="portfolio-details-lightbox portfolio-details-btn"
                            title="Portfolio Details"
                            width="100px"
                            style={{
                              cursor: "pointer",
                              color: "white",
                              fontSize: "30px",
                            }}
                            height="100px"
                          >
                            <i className="bx bx-link"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* <Portfolioitem /> */}
      {/* </div> */}
    </>
  );
};

export default Portfolio;
