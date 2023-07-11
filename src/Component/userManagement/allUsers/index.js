import React, { useState, useEffect, useContext } from "react";
import { TokenContext } from "../../TokenContext";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBRow,
  MDBCol
} from "mdb-react-ui-kit";
import Header from "../../header";

function AllUsers() {
  const { token } = useContext(TokenContext);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8089/users/getall?privateKey=${token}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error fetching users");
        }
      })
      .then((data) => {
        console.log("Response:", data); // Console log the response
        setUsers(data);
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
    <div>
        <Header/>
        <MDBRow className="row-cols-1 row-cols-md-3 g-4 p-5 ">
      {users.map((users) => (
        <MDBCol key={users.userId}>
          <MDBCard className="h-100 bg-dark">
            <MDBCardBody className="text-white">
              <MDBCardTitle>{users.firstName}</MDBCardTitle>
              <MDBCardText>Last Name: {users.lastName}</MDBCardText>
              <MDBCardText>Email Id: {users.email}</MDBCardText>
              <MDBCardText>Account Status: {users.userStatus}</MDBCardText>
            </MDBCardBody>
            <MDBCardFooter className="text-white">
              <small className="text-muted">Last updated 3 mins ago</small>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
      ))}
    </MDBRow>
    </div>
  );
}

export default AllUsers;
