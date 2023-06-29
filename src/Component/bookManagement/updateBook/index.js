import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function UpdateBook() {
  const navigate = useNavigate();

  const [bookData, setBookData] = useState({
    bookId: "",
    title: "",
    author: "",
    subject: "",
    ISBN: "",
    publisher: "",
    publicationDate: "",
    availableQuantities: "",
  });

  const handleChange = (e) => {
    setBookData({
      ...bookData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAdd = (e) => {
    e.preventDefault();

    fetch("http://localhost:8089/books/update", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookData),
    })
      .then((response) => {
        if (response.ok) {
          alert("Book added successfully");
          navigate("/adminLogin/adminDashboard");
        } else {
          alert("Error adding book");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error adding book");
      });
  };

  return (
    <section class="vh-100 gradient-custom">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              class="card bg-dark text-white"
              style={{ borderRadius: "1rem" }}
            >
              <div class="card-body p-4 text-center">
                <div class="mb-md-8 mt-md-3 pb-4">
                  <h2 class="fw-bold mb-2 text-uppercase">UPDATE</h2>
                  <p class="text-white-50 mb-5">
                    Please enter the book details to be updates!
                  </p>

                  <div class="form-outline form-white mb-4">
                    <input
                      type="int"
                      id="typeEmailX"
                      name="bookId"
                      class="form-control form-control-lg"
                      value={bookData.bookId}
                      onChange={handleChange}
                      
                    />
                    <label class="form-label" for="typeEmailX">
                      BookId{" "}
                    </label>
                  </div>

                  <div class="form-outline form-white mb-4">
                    <input
                      type="text"
                      id="typeEmailX"
                      name="title"
                      class="form-control form-control-lg"
                      value={bookData.title}
                      onChange={handleChange}
                      
                    />
                    <label class="form-label" for="typeEmailX">
                      Title{" "}
                    </label>
                  </div>

                  <div class="form-outline form-white mb-4">
                    <input
                      type="text"
                      id="typeEmailX"
                      name="author"
                      class="form-control form-control-lg"
                      value={bookData.author}
                        onChange={handleChange}
                  
                    />
                    <label class="form-label" for="typeEmailX">
                      Author{" "}
                    </label>
                  </div>

                  <div class="form-outline form-white mb-4">
                    <input
                      type="text"
                      name="subject"
                      id="typeEmailX"
                      class="form-control form-control-lg"
                      value={bookData.subject}
                        onChange={handleChange}
                     
                    />
                    <label class="form-label" for="typeEmailX">
                      Subject{" "}
                    </label>
                  </div>

                  <div class="form-outline form-white mb-4">
                    <input
                      type="long int"
                      id="typeEmailX"
                      name="ISBN"
                      class="form-control form-control-lg"
                      value={bookData.ISBN}
                        onChange={handleChange}
                       
                    />
                    <label class="form-label" for="typeEmailX">
                      ISBN{" "}
                    </label>
                  </div>

                  <div class="form-outline form-white mb-4">
                    <input
                      type="text"
                      id="typeEmailX"
                      name="publisher"
                      class="form-control form-control-lg"
                      value={bookData.publisher}
                        onChange={handleChange}
                       
                    />
                    <label class="form-label" for="typeEmailX">
                      Publisher{" "}
                    </label>
                  </div>

                  <div class="form-outline form-white mb-4">
                    <input
                      type="date"
                      id="typeEmailX"
                      name="publicationDate"
                      class="form-control form-control-lg"
                      value={bookData.publicationDate}
                        onChange={handleChange}
                        
                    />
                    <label class="form-label" for="typeEmailX">
                      Publication Date{" "}
                    </label>
                  </div>

                  <div class="form-outline form-white mb-4">
                    <input
                      type="int"
                      id="typeEmailX"
                      name="availableQuantities"
                      class="form-control form-control-lg"
                      value={bookData.availableQuantities}
                        onChange={handleChange}
                   
                    />
                    <label class="form-label" for="typeEmailX">
                      Available Quantities{" "}
                    </label>
                  </div>

                  <button
                    class="btn btn-outline-light btn-lg px-5"
                    type="submit"
                    onClick={handleAdd}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UpdateBook;
