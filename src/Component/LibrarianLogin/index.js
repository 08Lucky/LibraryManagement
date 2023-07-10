import React, {  useState, useContext  } from "react";
import { useNavigate } from "react-router-dom";

import Header from '../header/index';
import { TokenContext } from "../TokenContext";

function LibrarianLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const { setToken } = useContext(TokenContext);

  async function login() {
    console.warn(username, password);
    let item = { username, password };
    try {
      let response = await fetch("http://localhost:8089/librarian/login", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Accept": 'text/plain'
        },
        body: JSON.stringify(item)
      });
  
      if (response.ok) {
        let result = await response.text();
        console.log(result);
        setToken(result);
        localStorage.setItem("user-info", JSON.stringify(result));
        navigate("/adminLogin/adminDashboard");
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
      <Header/>
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
                  <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                  <p className="text-white-50 mb-5">
                    Please enter your login and password!
                  </p>

                  <div className="form-outline form-white mb-4">
                    <input
                      type="text"
                      id="typeUsername"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" htmlFor="typeUsername">
                      Username
                    </label>
                  </div>

                  <div className="form-outline form-white mb-4">
                    <input
                      type="password"
                      id="typePassword"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" htmlFor="typePassword">
                      Password
                    </label>
                  </div>

                  <button
                    className="btn btn-outline-light btn-lg px-5"
                    type="submit"
                    onClick={login}
                  >
                    Login
                  </button>
                  {errorMessage && <p className="text-danger mt-3">{errorMessage}</p>}
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

export default LibrarianLogin;
