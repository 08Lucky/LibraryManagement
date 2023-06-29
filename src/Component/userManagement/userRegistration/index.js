import React, { useState } from "react";
import { useNavigate  } from "react-router-dom";

function UserRegistration() {
  const navigate  = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accountStatus, setAccountStatus] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    // Perform validation
    if (!firstName || !lastName || !email || !password || !accountStatus) {
      alert("Please fill in all the fields.");
      return;
    }

    // Perform registration API call
    try {
      const response = await fetch("http://localhost:8089/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          accountStatus,
        }),
      });

      if (response.ok) {
        // Registration successful, redirect to userLogin page
        navigate("/userLogin");
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
                  <h2 class="fw-bold mb-2 text-uppercase">Register</h2>
                  <p class="text-white-50 mb-5">
                    Please enter your details for registration!
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
                      value={accountStatus}
                        onChange={(e) => setAccountStatus(e.target.value)}
                    />
                    <label class="form-label" for="typePasswordX">
                    Account Status
                    </label>
                  </div>

                  <button
                    class="btn btn-outline-light btn-lg px-5"
                    type="submit"
                    onClick={handleRegister}
                  >
                    Register
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

export default UserRegistration;
