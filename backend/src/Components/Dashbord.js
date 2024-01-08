import React from "react";

const Dashbord = () => {
  window.onload = async () => {
    const response = await fetch(`http://localhost:5000/api/fetchalldata`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data1 = await response.json();
    document.getElementById("total").innerHTML = data1.length;
  };
  return (
    <>
      <div className="content-wrapper">
        {/* <!-- Content --> */}

        <div className="container-xxl flex-grow-1 container-p-y">
          <div className="row">
            <div className="col-lg-6 col-md-4 order-1">
              <div className="row">
                <div className="col-lg-6 col-md-12 col-6 mb-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="card-title d-flex align-items-start justify-content-between">
                        <div className="avatar flex-shrink-0">
                          <img
                            src="../assets/img/icons/unicons/chart-success.png"
                            alt="chart success"
                            className="rounded"
                          />
                        </div>
                      </div>
                      <span className="fw-semibold d-block mb-1">Total Responses</span>
                      <h3 className="card-title mb-2" id="total"></h3>
                      {/* <small className="text-success fw-semibold">
                        <i className="bx bx-up-arrow-alt"></i> +72.80%
                      </small> */}
                    </div>
                  </div>
                </div>
                {/* <div className="col-lg-6 col-md-12 col-6 mb-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="card-title d-flex align-items-start justify-content-between">
                        <div className="avatar flex-shrink-0">
                          <img
                            src="../assets/img/icons/unicons/wallet-info.png"
                            alt="Credit Card"
                            className="rounded"
                          />
                        </div>
                      </div>
                      <span>Sales</span>
                      <h3 className="card-title text-nowrap mb-1">$4,679</h3>
                      <small className="text-success fw-semibold">
                        <i className="bx bx-up-arrow-alt"></i> +28.42%
                      </small>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            {/* <div className="col-lg-6 col-md-4 order-1">
              <div className="row">
                <div className="col-lg-6 col-md-12 col-6 mb-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="card-title d-flex align-items-start justify-content-between">
                        <div className="avatar flex-shrink-0">
                          <img
                            src="../assets/img/icons/unicons/chart-success.png"
                            alt="chart success"
                            className="rounded"
                          />
                        </div>
                      </div>
                      <span className="fw-semibold d-block mb-1">Profit</span>
                      <h3 className="card-title mb-2">$12,628</h3>
                      <small className="text-success fw-semibold">
                        <i className="bx bx-up-arrow-alt"></i> +72.80%
                      </small>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-6 mb-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="card-title d-flex align-items-start justify-content-between">
                        <div className="avatar flex-shrink-0">
                          <img
                            src="../assets/img/icons/unicons/wallet-info.png"
                            alt="Credit Card"
                            className="rounded"
                          />
                        </div>
                      </div>
                      <span>Sales</span>
                      <h3 className="card-title text-nowrap mb-1">$4,679</h3>
                      <small className="text-success fw-semibold">
                        <i className="bx bx-up-arrow-alt"></i> +28.42%
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        {/* <!-- / Content --> */}

        <div className="content-backdrop fade"></div>
      </div>
    </>
  );
};

export default Dashbord;
