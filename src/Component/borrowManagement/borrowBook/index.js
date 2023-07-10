import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../header/index";
import { TokenContext } from "../../TokenContext";

function BorrowBook() {
  const navigate = useNavigate();
  const { token } = useContext(TokenContext);
  console.log(token);
  
  const [bookId, setBookId] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  async function Borrow() {

    if (!bookId ) {
      setErrorMessage("Book ID is required");
      return;
    }

  
    try {
      let response = await fetch(`http://localhost:8089/borrowings/borrow?privateKey=${token}&bookId=${bookId}`, {
        method: "POST",
      });

      if (response.ok) {
        const result = await response.text();
        console.log(result);
        alert("Book Borrowed successfully");
        navigate("/userLogin/userDashboard");
      } else if (response.status === 401) {
        setErrorMessage("Unauthorized access");
      } else {
        setErrorMessage("Error: Could not borrow the books");
      }
    } catch (error) {
      setErrorMessage("An error occurred while borrowing the book");
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
                  <h2 class="fw-bold mb-3 text-uppercase">Borrow Book</h2>
                  <p class="text-white-50 mb-4">
                    Enter the BookId to successfully borrow the desired book
                  </p>

                  <div class="form-outline form-white mb-4">
                    <input
                      type="int"
                      id="typeEmailX"
                      name="bookId"
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
                    onClick={Borrow}
                  >
                    Borrow
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

export default BorrowBook