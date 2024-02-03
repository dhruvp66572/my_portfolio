import CloseButton from "react-bootstrap/CloseButton";

const Portfolioitem = (props) => {
  const handleonclick = () => {
    console.log("clicked");
    document.getElementById("portfolio").style.display = "block";
    document.getElementById("pitem").style.display = "none";
  };
  return (
    <>
      <main id="main">
        {/* <!-- ======= Portfolio Details ======= --> */}
        {props.data.map((item) => {
          const { id } = item;
          if (id === props.pid) {
            return (
          <div
            id="portfolio-details"
            style={{ marginTop: "80px" }}
            className="portfolio-details"
          >
            <CloseButton
              variant="white"
              onClick={handleonclick}
              style={{
                justifyContent: "end",
                marginLeft: "1150px",
                fontSize: "20px",
              }}
            />
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <h2 className="portfolio-title">
                    {item.pname}
                  </h2>

                  <div className="portfolio-details-slider swiper">
                    <div className="swiper-wrapper align-items-center">
                      <div className="swiper-slide">
                        <img
                          src="assets/img/portfolio/portfolio-details-1.jpg"
                          alt=""
                        />
                      </div>

                      <div className="swiper-slide">
                        <img
                          src="assets/img/portfolio/portfolio-details-2.jpg"
                          alt=""
                        />
                      </div>

                      <div className="swiper-slide">
                        <img
                          src="assets/img/portfolio/portfolio-details-3.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="swiper-pagination"></div>
                  </div>
                </div>

                <div className="col-lg-4 portfolio-info">
                  <h3>Project information</h3>
                  <ul>
                    <li>
                      <strong>Category</strong>: {props.pcategory}
                    </li>
                    <li>
                      <strong>Client</strong>: {props.pclient}
                    </li>
                    <li>
                      <strong>Project date</strong>: {props.pdate}
                    </li>
                    <li>
                      <strong>Project URL</strong>:
                      <a href="/">{props.purl}</a>
                    </li>
                  </ul>

                  <p>
                    {props.pdesc}
                  </p>
                </div>
              </div>
            </div>
          </div>
            );
          }
        }
        )}
        {/* <!-- End Portfolio Details --> */}
      </main>
    </>
  );
};

export default Portfolioitem;
