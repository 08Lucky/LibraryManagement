import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../header/index";
import { TokenContext } from "../../TokenContext";

function ReserveBook() {

  const navigate = useNavigate();
  const { token } = useContext(TokenContext);
  console.log(token);

  const [userId, setUserId] = useState("");
  const [bookId, setBookId] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  async function Reserve() {

    if (!bookId || !userId ) {
      setErrorMessage("Book ID is required");
      return;
    }
 
    try {
      let response = await fetch(`http://localhost:8089/reservations/reserve?privateKey=${token}&userId=${userId}&bookId=${bookId}`, {
        method: "POST",
      });

      if (response.ok) {
        const result = await response.text();
        console.log(result);
        alert("Book Reserved Successfully");
        navigate("/userLogin/userDashboard");
      } else if (response.status === 401) {
        setErrorMessage("Unauthorized access");
      } else {
        setErrorMessage("Could not reserve the book as there are copies available in the library. Please try borrowing them");
      }
    } catch (error) {
      setErrorMessage("An error occurred while reserving the book");
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
                  <h2 class="fw-bold mb-3 text-uppercase">Reserve Book</h2>
                  <p class="text-white-50 mb-4">
                    Enter the BookId and the UserId to successfully Reserve the book which are checked out by others. You will be only able to reserve the book if the number of available quantities of the book is less than 1
                  </p>

                  <div class="form-outline form-white mb-4">
                    <input
                      type="int"
                      id="typeEmailX"
                      class="form-control form-control-lg"
                      value={userId}
                      onChange={(e) => setUserId(e.target.value)}
                    />
                    <label class="form-label" for="typeEmailX">
                      UserId
                    </label>
                  </div>

                  <div class="form-outline form-white mb-4">
                    <input
                      type="int"
                      id="typeEmailX"
                      class="form-control form-control-lg"
                      value={bookId}
                      onChange={(e) => setBookId(e.target.value)}
                    />
                    <label class="form-label" for="typeEmailX">
                      BookId
                    </label>
                  </div>

                  <button
                    class="btn btn-outline-light btn-lg px-5"
                    type="submit"
                    onClick={Reserve}
                  >
                    Reserve
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
  );
}

export default ReserveBook