import React, { useState, useContext} from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../header/index";
import { TokenContext } from "../../TokenContext";

function DeleteLoan() {

  const navigate = useNavigate();
  const { token } = useContext(TokenContext);

  const [loanId, setLoanId] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  async function Cancel() {

    if (!loanId ) {
      setErrorMessage("Loan ID is required");
      return;
    }

  
    try {
      let response = await fetch(`http://localhost:8089/loan-management/${loanId}?privateKey=${token}`, {
        method: "DELETE",
      });

      if (response.ok) {
        const result = await response.text();
        console.log(result);
        alert("Loan Canceled successfully");
        navigate("/adminLogin/adminDashboard");
      } else if (response.status === 401) {
        setErrorMessage("Unauthorized access");
      } else {
        setErrorMessage("Could not cancel the loan");
      }
    } catch (error) {
      setErrorMessage("An error occurred while cancelling the loan");
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
                  <h2 class="fw-bold mb-3 text-uppercase">Cancel Loan</h2>
                  <p class="text-white-50 mb-4">
                    Enter the LoanId to cancel the loan
                  </p>

                  <div class="form-outline form-white mb-4">
                    <input
                      type="int"
                      id="typeEmailX"
                      class="form-control form-control-lg"
                      value={loanId}
                      onChange={(e) => setLoanId(e.target.value)}
                    />
                    <label class="form-label" for="typeEmailX">
                      LoanId
                    </label>
                  </div>

                  <button
                    class="btn btn-outline-light btn-lg px-5"
                    type="submit"
                    onClick={Cancel}
                  >
                    Cancel
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

export default DeleteLoan