import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../header/index";
import { TokenContext } from "../../TokenContext";

function UpdateDetails() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userStatus, setUserStatus] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const { token } = useContext(TokenContext);

  const handleUpdate = async (e) => {
    e.preventDefault();

    // Perform validation
    if (!firstName || !lastName || !email || !password || !userStatus) {
      alert("Please fill in all the fields.");
      return;
    }

    // Perform registration API call
    try {
      const response = await fetch(`http://localhost:8089/users/update?privateKey=${token}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          userStatus,
        }),
      });

      if (response.ok) {
        alert("User details updated successfully"); // Registration successful, redirect to userLogin page
        navigate("/userLogin/userDashboard");
      } else {
        // Handle registration error
        const errorData = await response.json();
        alert(errorData.message);
      }
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Registration failed. Please try again later.");
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
                  <h2 class="fw-bold mb-2 text-uppercase">Update</h2>
                  <p class="text-white-50 mb-5">
                    Please enter your details for updating!
                  </p>

                  <div class="form-outline form-white mb-4">
                    <input
                      type="text"
                      id="typeEmailX"
                      class="form-control form-control-lg"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                    <label class="form-label" for="typeEmailX">
                      First Name{" "}
                    </label>
                  </div>

                  <div class="form-outline form-white mb-4">
                    <input
                      type="text"
                      id="typeEmailX"
                      class="form-control form-control-lg"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                    <label class="form-label" for="typeEmailX">
                      Last Name{" "}
                    </label>
                  </div>

                  <div class="form-outline form-white mb-4">
                    <input
                      type="email"
                      id="typeEmailX"
                      class="form-control form-control-lg"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label class="form-label" for="typeEmailX">
                      Email
                    </label>
                  </div>

                  <div class="form-outline form-white mb-4">
                    <input
                      type="password"
                      id="typePasswordX"
                      class="form-control form-control-lg"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <label class="form-label" for="typePasswordX">
                      Password
                    </label>
                  </div>

                  <div class="form-outline form-white mb-4">
                    <input
                      type="text"
                      id="typePasswordX"
                      class="form-control form-control-lg"
                      value={userStatus}
                      onChange={(e) => setUserStatus(e.target.value)}
                    />
                    <label class="form-label" for="typePasswordX">
                      Account Status
                    </label>
                  </div>

                  <button
                    class="btn btn-outline-light btn-lg px-5"
                    type="submit"
                    onClick={handleUpdate}
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

export default UpdateDetails;
