import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../header/index";

function UserActivityResult() {
    const location = useLocation();
    const { report } = location.state;
    const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/adminLogin/adminDashboard");
  };
  return (
    <div>
        <Header/>
        <button className="btn btn-primary m-2 bg-dark" onClick={handleNavigate}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-arrow-left"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
          />
        </svg>
      </button>
        <section className="vh-100 gradient-custom ">
        <div className="container py-3 h-100">
          <div className="row d-flex justify-content-center align-items-center h-70">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card bg-dark text-white"
                style={{ borderRadius: "1rem" }}
              >
                <div className="card-body p-4 text-center">
                
                  <h2 className="fw-bold mb-4 text-uppercase">User Activity Report</h2>
                  <hr/>
                  {report.length > 0 ? (
                    <div>
                      {report.map((report) => (
                        <div key={report.id} className="mb-4">
                          <h4 className="mb-4">Id: {report.userId}</h4>
                          <p>First Name: {report.firstName}</p>
                          <p>Last Name: {report.lastName}</p>
                          <p>Email: {report.email}</p>
                          <p>Activity Status: {report.activityType}</p>
                          <hr />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p>No books found.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default UserActivityResult