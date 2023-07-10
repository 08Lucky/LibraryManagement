import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../header";
import { TokenContext } from "../TokenContext";

function Logout() {

    const { token } = useContext(TokenContext);
    console.log("Token:", token);
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");

    const logout = () => {
    
        fetch(`http://localhost:8089/librarian/logout?privateKey=${token}`,
        {
          method: "POST",
        })
          .then((response) => {
            if (response.ok) {
              navigate("/");
            } else {
              setErrorMessage("Failed to LogOut");
            }
          })
          .catch((error) => {
            // Error occurred while making the API request
            setErrorMessage("An error occurred while updating the book");
          });
      };
  return (
    <div>
      <Header />
      <section className="vh-80 gradient-custom wrapper">
        <div className="container py-5 h-70">
          <div className="row d-flex justify-content-center align-items-center h-50">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card bg-dark text-white"
                style={{ borderRadius: "1rem" }}
              >
                <div className="card-body p-4 text-center">
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">Logout</h2>
                    <p className="text-white-50 mb-5">
                      Please enter your privateKey to Logout!
                    </p>

                    <button
                      className="btn btn-outline-light btn-lg px-5"
                      type="submit"
                      onClick={logout}
                    >
                      Logout
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

export default Logout;
