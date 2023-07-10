import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../header/index";
import { TokenContext } from "../TokenContext";

function SearchBook() {
  const navigate = useNavigate();
  const { token } = useContext(TokenContext);
  console.log(token);
  const [searchValue, setSearchValue] = useState("");

  async function searchBooks() {
  
    try {
      let response = await fetch(`http://localhost:8089/books/search?title=${searchValue}&author=${searchValue}&subject=${searchValue}&privateKey=${token}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });


      if (response.ok) {
        const books = await response.json();
        console.log(books);
        navigate("/userLogin/userDashboard/searchResults", { state: { books } });
      } else if (response.status === 401) {
        console.log("Unauthorized access");
      } else {
        console.log("Error: Could not search books");
      }
    } catch (error) {
      console.error(error);
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
                  <h2 class="fw-bold mb-3 text-uppercase">Search Book</h2>
                  <p class="text-white-50 mb-4">
                    You can either enter the Title/Author Name/Subject to search the book.
                  </p>

                  <div class="form-outline form-white mb-4">
                    <input
                      type="int"
                      id="typeEmailX"
                      class="form-control form-control-lg"
                      value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                    <label class="form-label" for="typeEmailX">
                      Title/Author/Subject
                    </label>
                  </div>

                  <button
                    class="btn btn-outline-light btn-lg px-5"
                    type="submit"
                    onClick={searchBooks}
                  >
                    Search
                  </button>
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

export default SearchBook;