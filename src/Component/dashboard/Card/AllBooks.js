import React, { useState, useEffect, useContext } from "react";
import { TokenContext } from "../../TokenContext";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBRow,
  MDBCol
} from "mdb-react-ui-kit";

function AllBooks() {
  const { token } = useContext(TokenContext);
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8089/books?privateKey=${token}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error fetching books");
        }
      })
      .then((data) => {
        console.log("Response:", data); // Console log the response
        setBooks(data);
      })
      .catch((error) => {
        setError(error.message);
        console.error("Error:", error);
      });
  }, [token]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <MDBRow className="row-cols-1 row-cols-md-3 g-4 p-5">
      {books.map((book) => (
        <MDBCol key={book.bookId}>
          <MDBCard className="h-100">
            {book.image && (
              <MDBCardImage
                src={`data:image/jpeg;base64,${book.image}`}
                alt="Book Cover"
                position="top"
              />
            )}
            <MDBCardBody>
              <MDBCardTitle>{book.title}</MDBCardTitle>
              <MDBCardText>BookId: {book.bookId}</MDBCardText>
              <MDBCardText>Author: {book.author}</MDBCardText>
              <MDBCardText>Subject: {book.subject}</MDBCardText>
              <MDBCardText>ISBN: {book.isbn}</MDBCardText>
              <MDBCardText>Publisher: {book.publisher}</MDBCardText>
              <MDBCardText>Publication Date: {book.publicationDate}</MDBCardText>
              <MDBCardText>Available Quantity: {book.availableQuantity}</MDBCardText>
            </MDBCardBody>
            <MDBCardFooter>
              <small className="text-muted">Last updated 3 mins ago</small>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
      ))}
    </MDBRow>
  );
}

export default AllBooks;
