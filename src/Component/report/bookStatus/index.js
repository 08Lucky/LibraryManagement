import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../header/index";
import { TokenContext } from "../../TokenContext";

function UserActivity() {
  const { token } = useContext(TokenContext);

  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  async function Status() {
  
    try {
      let response = await fetch(`http://localhost:8089/reports/book-status?privateKey=${token}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });


      if (response.ok) {
        const userReport = await response.json();
        console.log(userReport);
        navigate("/adminLogin/adminDashboard/bookStatusResult", { state: { userReport } });
      } else if (response.status === 401) {
        console.log("Unauthorized access");
      } else {
        setErrorMessage("Failed to Generate the Report");
      }
    } catch (error) {
      setErrorMessage("An error occurred while sending Remainder");
    }
  }

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
                  <h2 class="fw-bold mb-3 text-uppercase">Book Status</h2>
                  <p class="text-white-50 mb-4">
                    Get the report based on Book Status
                  </p>

                  <button
                    class="btn btn-outline-light btn-lg px-5"
                    type="submit"
                    onClick={Status}
                  >
                    Submit
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

export default UserActivity