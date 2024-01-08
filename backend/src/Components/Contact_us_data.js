import React, { useEffect, useState } from "react";
// import { Link } from 'react-router-dom'

const Contact_us_data = () => {
  const [data, setData] = useState([]);
  const fetchalldata = async () => {
    // Get All  Data
    // API Call
    const response = await fetch(`http://localhost:5000/api/fetchalldata`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data1 = await response.json();
    setData(data1);
    console.log(data1.length)
    // console.log(data1[2]._id)
  };

  const handleondelete = async (id) => {
    if (window.confirm("Are you really want to delete this item?")) {
      const response = await fetch(
        `http://localhost:5000/api/deletedata/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data1 = await response.json();
      console.log(data1);
      fetchalldata();
      console.log("delete");
      console.log(id);
     
    }
  };

  useEffect(() => {
    fetchalldata();
  }, []);

  return (
    <div>
      <div className="content-wrapper">
        <div className="container-xxl flex-grow-1 container-p-y">
          {/* <!-- Basic Bootstrap Table --> */}
          <div className="card">
            <h5 className="card-header">Recived Contact Us</h5>
            <div className="table-responsive text-nowrap">
              <table className="table">
                <thead>
                  <tr>
                    <th>Sr no</th>
                    <th style={{ textAlign: "center" }}>Name</th>
                    <th>Email</th>
                    <th>Subject</th>
                    <th>Description</th>
                    {/* <th>Date</th> */}
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
                          <strong>{item.cname}</strong>
                        </td>
                        <td>{item.cemail}</td>
                        <td>{item.csubject}</td>
                        <td>{item.description}</td>
                        {/* <td>item.date</td> */}
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

export default Contact_us_data;
