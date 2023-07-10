import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TokenContext } from "../TokenContext";

import Header from "../header/index";

function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const { setToken } = useContext(TokenContext);

  async function login() {
    console.warn(email, password);
    let item = { email, password };

    try {
      let response = await fetch("http://localhost:8089/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "text/plain",
        },
        body: JSON.stringify(item)
      });


      if (response.ok) {
        let result = await response.text();
        console.log(result);
        setToken(result);
        localStorage.setItem("user-info", JSON.stringify(result));
        navigate("/userLogin/userDashboard");
      } else {
        setErrorMessage("Invalid username or password");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("An error occurred during login");
    }
  }

  return (
    <div>
      <Header />
      <section class="vh-80 gradient-custom">
        <div class="container py-5 h-70">
          <div class="row d-flex justify-content-center align-items-center h-60">
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                class="card bg-dark text-white"
                style={{ borderRadius: "1rem" }}
              >
                <div class="card-body p-4 text-center">
                  <div class="mb-md-5 mt-md-4 pb-3">
                    <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                    <p class="text-white-50 mb-5">
                      Please enter your UserId and password!
                    </p>

                    <div class="form-outline form-white mb-4">
                      <input
                        type="email"
                        id="typeEmailX"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        class="form-control form-control-lg"
                      />
                      <label class="form-label" for="typeEmailX">
                        Email
                      </label>
                    </div>

                    <div class="form-outline form-white mb-4">
                      <input
                        type="password"
                        id="typePasswordX"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        class="form-control form-control-lg"
                      />
                      <label class="form-label" for="typePasswordX">
                        Password
                      </label>
                    </div>

                    <button
                      class="btn btn-outline-light btn-lg px-5"
                      type="submit"
                      onClick={login}
                    >
                      Login
                    </button>
                    {errorMessage && (
                      <p className="text-danger mt-3">{errorMessage}</p>
                    )}
                  </div>

                  <div>
                    <p class="mb-0">
                      Don't have an account?{" "}
                      <a href="/userRegister" class="text-white-50 fw-bold">
                        Register Now!
                      </a>
                    </p>
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

export default UserLogin;
