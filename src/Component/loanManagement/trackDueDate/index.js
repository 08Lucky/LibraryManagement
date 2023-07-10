import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../header/index";
import { TokenContext } from "../../TokenContext";

function TrackDueDate() {
  const { token } = useContext(TokenContext);

  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  async function track() {

    try {
      let response = await fetch(`http://localhost:8089/loan-management/track-due-dates?privateKey=${token}`, {
        method: "POST",
      });

      if (response.ok) {
        const result = await response.text();
        console.log(result);
        alert("Due Date tracked successfully");
        navigate("/adminLogin/adminDashboard");
      } else if (response.status === 401) {
        setErrorMessage("Unauthorized access");
      } else {
        setErrorMessage("Could not track the due date");
      }
    } catch (error) {
      setErrorMessage("An error occurred while tracking the due date");
    }
  };

  return (
    <div>
      <Header/>
      <section class="vh-100 gradient-custom">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-70">
          <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              class="card bg-dark text-white"
              style={{ borderRadius: "1rem" }}
            >
              <div class="card-body p-4 text-center">
                <div class="mb-md-3 mt-md-3 pb-3">
                  <h2 class="fw-bold mb-3 text-uppercase">Track Due-Date & Issue Fines</h2>
                  <p class="text-white-50 mb-4">
                    Click on the submit button below to track the due dates and the fine collected by the users. 
                  </p>

                  <button
                    class="btn btn-outline-light btn-lg px-5"
                    type="submit"
                    onClick={track}
                  >
                    Send
                  </button>
                  {errorMessage && (
                    <p className="text-danger mt-3">{errorMessage}</p>
                  )}
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default TrackDueDate;