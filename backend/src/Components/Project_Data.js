import React, { useEffect, useState } from "react";

const Project_Data = () => {
  const [data, setData] = useState([]);
  let imgname = "";
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

  const handleondelete = async (id) => {
    if (window.confirm("Are you really want to delete this item?")) {
      const response = await fetch(
        `http://localhost:5000/api/projects/deleteproject/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
     await response.json();
      fetchalldata();
      console.log("delete");
      console.log(id);
    }
  };

  useEffect(() => {
    fetchalldata();
  }, []);

  const addproject = async (
    pname,
    pcategory,
    pclient,
    pdescription,
    purl,
    pimage,
    date
  ) => {
    try {
      // API Call
      const response = await fetch(
        "http://localhost:5000/api/projects/addproject",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // "Content-type": "multipart/form-data"
          },
          body: JSON.stringify({
            pname: pname,
            pcategory: pcategory,
            pclient: pclient,
            pdescription: pdescription,
            purl: purl,
            pimage: pimage,
            date: date,
          }),
        }
      );
      await response.json();
      alert("Added");
      fetchalldata();
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleadd = (e) => {
    e.preventDefault();

    let pname = document.getElementById("pname").value;
    let pcategory = document.getElementById("pcategory").value;
    let pclient = document.getElementById("pclient").value;
    let pdescription = document.getElementById("pdescription").value;
    let purl = document.getElementById("purl").value;
    let date = document.getElementById("date");

    addproject(pname, pcategory, pclient, pdescription, purl, imgname, date.value);

    document.getElementById("pname").value = "";
    document.getElementById("pcategory").value = "";
    document.getElementById("pclient").value = "";
    document.getElementById("pdescription").value = "";
    document.getElementById("purl").value = "";
    document.getElementById("pimage").value = "";
    document.getElementById("date").value = "";
  };

  return (
    <div>
      <div className="content-wrapper">
        <div className="container-xxl flex-grow-1 container-p-y">
          {/* <!-- Basic Bootstrap Table --> */}
          <div className="row">
            <div className="col-xl">
              <div className="card mb-4">
                <div className="card-header d-flex justify-content-between align-items-center">
                  <h5 className="mb-0">Add New Proect</h5>
                  {/* <small className="text-muted float-end">Default label</small> */}
                </div>
                <div className="card-body">
                  <form onSubmit={handleadd} >
                    <div className="row">
                      <div className="mb-3 col-5 d-inline-block">
                        <label
                          className="form-label"
                          htmlFor="basic-default-fullname"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="pname"
                          name="pname"
                          placeholder="Enter Project Name"
                          required
                          minLength={3}
                        />
                      </div>
                      <div className="mb-3 col-5 d-inline-block">
                        <label
                          className="form-label"
                          htmlFor="basic-default-fullname"
                        >
                          Category
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="pcategory"
                          name="pcategory"
                          placeholder="Ex. web application"
                          required
                          minLength={3}
                        />
                      </div>

                      <div className="mb-3 col-5 d-lg-inline-block">
                        <label
                          className="form-label"
                          htmlFor="basic-default-fullname"
                        >
                          Client Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="pclient"
                          name="pclient"
                          placeholder="Enter Client Name"
                          required
                          minLength={3}
                        />
                      </div>
                      <div className="mb-3 col-5 d-lg-inline-block">
                        <label htmlFor="html5-url-input" className="form-label">
                          Project URL
                        </label>
                        {/* <div className="col-md-10"> */}
                        <input
                          className="form-control"
                          type="url"
                          placeholder="Enter Project URL"
                          id="purl"
                          name="purl"
                          required
                        />
                        {/* </div> */}
                      </div>
                      <div className="mb-3 col-5 d-lg-inline-block">
                        <label
                          htmlFor="html5-date-input"
                          className="col-md-2 col-form-label"
                        >
                          Date
                        </label>

                        <input
                          className="form-control"
                          type="date"
                          id="date"
                          name="date"
                          required
                        />
                      </div>
                      <div className="mb-3 mt-1 col-5 d-lg-inline-block">
                        <label htmlFor="formFile" className="form-label">
                          Upload Project Image
                        </label>
                        <input
                          className="form-control"
                          type="file"
                          id="pimage"
                          name="pimage"
                          // accept="image/*"
                          onChange={(e) => {
                            console.log(e.target.files[0]);
                            imgname = e.target.files[0].name;
                          }}
                          required
                        />
                      </div>
                      <div className="mb-3 col-10 d-lg-inline-block">
                        <label
                          className="form-label"
                          htmlFor="basic-default-message"
                        >
                          Project Description
                        </label>
                        <textarea
                          id="pdescription"
                          name="pdescription"
                          className="form-control"
                          placeholder="Write About Project"
                          required
                          minLength={5}
                        ></textarea>
                      </div>
                      <div className="mb-3 col-6 d-lg-inline-block">
                        <button type="submit" className="btn btn-primary w-25">
                          Add
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <h5 className="card-header">Avaiable Projects</h5>
            <div className="table-responsive text-nowrap">
              <table className="table">
                <thead>
                  <tr>
                    <th>Sr no</th>
                    <th style={{ textAlign: "center" }}>Name</th>
                    <th>Category</th>
                    <th>Client</th>
                    <th>URL</th>
                    <th>Date</th>
                    <th>Image</th>
                    <th>Description</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody className="table-border-bottom-0">
                  {data.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <i className="fab fa-angular fa-lg text-danger me-3"></i>{" "}
                          <strong>{item.pname}</strong>
                        </td>
                        <td>{item.pcategory}</td>
                        <td>{item.pclient}</td>
                        <td>{item.purl}</td>
                        <td>{item.date}</td>
                        <td>{item.pimage}</td>
                        <td>{item.pdescription}</td>
                        <td>
                          <span
                            style={{ cursor: "pointer" }}
                            className="badge bg-label-primary me-1"
                          >
                            <i
                              className="bx bx-trash me-1"
                              onClick={() => {
                                handleondelete(data[index]._id);
                              }}
                            />
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          {/* <!--/ Basic Bootstrap Table --> */}
        </div>
      </div>
    </div>
  );
};

export default Project_Data;
