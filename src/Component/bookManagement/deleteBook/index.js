import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function DeleteBook() {
  const navigate = useNavigate();

  const [bookId, setBookId] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleDelete = () => {
    if (!bookId) {
      setErrorMessage("Book ID is required");
      return;
    }

    fetch(`http://localhost:8089/books/${bookId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          navigate("/adminDashboard");
        } else {
          setErrorMessage("Failed to Delete book");
        }
      })
      .catch((error) => {
        // Error occurred while making the API request
        setErrorMessage("An error occurred while updating the book");
      });
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
                  <h2 class="fw-bold mb-3 text-uppercase">Delete</h2>
                  <p class="text-white-50 mb-4">
                    Enter the BookId of the specific book that you wish to
                    delete
                  </p>

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
                    onClick={handleDelete}
                  >
                    Delete
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

export default DeleteBook;
