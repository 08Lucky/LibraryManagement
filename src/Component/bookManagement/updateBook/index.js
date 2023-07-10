import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../header/index";
import { TokenContext } from "../../TokenContext";

function UpdateBook() {
  const navigate = useNavigate();

  const [bookData, setBookData] = useState({
    bookId: "",
    title: "",
    author: "",
    subject: "",
    isbn: "",
    publisher: "",
    publicationDate: "",
    availableQuantity: "",
    image: null,
  });

  const { token } = useContext(TokenContext);

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setBookData({
        ...bookData,
        image: e.target.files[0], // Assign the selected file to the image property
      });
    } else {
      setBookData({
        ...bookData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleAdd = async (e) => {
    const bookFormData = new FormData();
    bookFormData.append("title", bookData.title);
    bookFormData.append("author", bookData.author);
    bookFormData.append("subject", bookData.subject);
    bookFormData.append("isbn", bookData.isbn);
    bookFormData.append("publisher", bookData.publisher);
    bookFormData.append("publicationDate", bookData.publicationDate);
    bookFormData.append("availableQuantity", bookData.availableQuantity);

    const formData = new FormData();
    formData.append("book", JSON.stringify(Object.fromEntries(bookFormData)));

    formData.append("imageFile", bookData.image);

    try {
      const response = await fetch(
        `http://localhost:8089/books/update?privateKey=${token}`,
        {
          method: "PUT",
          body: formData,
        }
      );

      if (response.status === 200) {
        alert("Book updated successfully");
        navigate("/adminLogin/adminDashboard");
      } else {
        alert("Error while Updating book");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error while Updating book");
    }
  };

  return (
    <div>
      <Header/>
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
                    Please enter the book details to be updated!
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
                      type="text"
                      id="typeEmailX"
                      name="isbn"
                      class="form-control form-control-lg"
                      value={bookData.isbn}
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
                      name="availableQuantity"
                      class="form-control form-control-lg"
                      value={bookData.availableQuantity}
                        onChange={handleChange}
                   
                    />
                    <label class="form-label" for="typeEmailX">
                      Available Quantities{" "}
                    </label>
                  </div>

                  <div class="form-outline form-white mb-4">
                      <input
                        type="file"
                        id="typeEmailX"
                        name="image"
                        class="form-control form-control-lg"
                        onChange={handleChange}
                      />
                      <label class="form-label" for="typeEmailX">
                        Book Cover Image{" "}
                      </label>
                    </div>

                    <button
                      class="btn btn-outline-light btn-lg px-5"
                      type="submit"
                      onClick={handleAdd}
                    >
                      Update
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

export default UpdateBook;
