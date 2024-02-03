import React, { useState } from "react";

function ImageDemo() {
  const [image, setImage] = useState();

  const uploadimg = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("id", e.target.id.value);
    formData.append('image', image);

    try {    
        fetch("http://localhost:5000/api/imagupload/", {
         method: 'POST',
         body: formData
       }).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        });
       alert("Image Uploaded Successfully");
    //    console.log(formData.)
    } catch (error) {
        console.log(error.message)
    }
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
                  <h5 className="mb-0">Upload Image Demo</h5>
                  {/* <small className="text-muted float-end">Default label</small> */}
                </div>
                <div className="card-body">
                  <form onSubmit={uploadimg}>
                    <div className="row">
                      <div className="mb-3 col-5 d-inline-block">
                        <label
                          className="form-label"
                          htmlFor="basic-default-fullname"
                        >
                          Id
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="id"
                          name="id"
                          placeholder="Enter Image Id"
                        />
                      </div>
                      <div className="mb-3 mt-1 col-5 d-lg-inline-block">
                        <label htmlFor="formFile" className="form-label">
                          Upload Image
                        </label>
                        <input
                          className="form-control"
                          type="file"
                          id="image"
                          name="image"
                          // accept="image/*"
                          onChange={(e) => {
                            // console.log(e.target.files[0]);
                            setImage(e.target.files[0].name);
                          }}
                          required
                        />
                      </div>
                      <div className="mb-3 col-6 d-lg-inline-block">
                        <button
                          type="submit"
                          className="btn btn-primary w-25"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="card">
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
          </div> */}
          {/* <!--/ Basic Bootstrap Table --> */}
        </div>
      </div>
    </div>
  );
}

export default ImageDemo;
