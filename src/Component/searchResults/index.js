import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../header/index";

function SearchResults() {
    const location = useLocation();
    const { books } = location.state;

  return (
    <div>
      <Header />
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-70">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5 ">
              <div
                className="card bg-dark text-white"
                style={{ borderRadius: "1rem" }}
              >
                <div className="card-body p-4 text-center">
                
                  <h2 className="fw-bold mb-4 text-uppercase">Search Results</h2>
                  <hr/>
                  {books.length > 0 ? (
                    <div>
                      {books.map((book) => (
                        <div key={book.id} className="mb-4">
                          <h4 className="mb-4">Title: {book.title}</h4>
                          {book.image && (
                            <img
                              src={`data:image/jpeg;base64,${book.image}`}
                              alt="Book Cover"
                              style={{ maxWidth: "300px" }}
                              className="p-4"
                            />
                          )}
                          <p>Author: {book.author}</p>
                          <p>Subject: {book.subject}</p>
                          <p>ISBN: {book.isbn}</p>
                          <p>Publisher: {book.publisher}</p>
                          <p>Available Quantity: {book.availableQuantity}</p>
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
  );
}

export default SearchResults;
