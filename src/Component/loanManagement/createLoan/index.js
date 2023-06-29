import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateLoan() {
  const navigate = useNavigate();

  const [bookId, setBookId] = useState("");
  const [userId, setUserId] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleCreateLoan = async () => {
    try {
      const response = await fetch("http://localhost:8089/loan-management/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ bookId, userId }),
      });

      if (response.ok) {
        // Loan created successfully
        navigate("/adminLogin/adminDashboard");
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message);
      }
    } catch (error) {
      console.error("Error creating loan:", error);
      setErrorMessage("An error occurred while creating the loan.");
    }
  };

  return (
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
                  <h2 class="fw-bold mb-3 text-uppercase">Create Loan</h2>
                  <p class="text-white-50 mb-4">
                    Enter the BookId and the UserId to successfully create a
                    loan.
                  </p>
                  <p class="text-white-50 mb-4">
                    Please Note that the Loan will only be created if there is
                    the user has borrowed the specific book.
                  </p>

                  <div class="form-outline form-white mb-4">
                    <input
                      type="int"
                      id="typeEmailX"
                      value={userId}
                      onChange={(e) => setUserId(e.target.value)}
                      class="form-control form-control-lg"
                    />
                    <label class="form-label" for="typeEmailX">
                      UserId
                    </label>
                  </div>

                  <div class="form-outline form-white mb-4">
                    <input
                      type="int"
                      id="typeEmailX"
                      value={bookId}
                      onChange={(e) => setBookId(e.target.value)}
                      class="form-control form-control-lg"
                    />
                    <label class="form-label" for="typeEmailX">
                      BookId
                    </label>
                  </div>

                  <button
                    class="btn btn-outline-light btn-lg px-5"
                    type="submit"
                    onClick={handleCreateLoan}
                  >
                    Create
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
  );
}

export default CreateLoan;
