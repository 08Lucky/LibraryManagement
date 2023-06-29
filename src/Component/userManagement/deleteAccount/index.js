import React, { useState } from "react";
import { useNavigate  } from "react-router-dom";

function DeleteAccount() {
  const navigate  = useNavigate();

  const [userId, setUserId] = useState("");

  const handleDelete = () => {
    fetch(`http://localhost:8089/users/${userId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          // User account successfully deleted
          alert("User account deleted successfully!");
          navigate("/adminLogin/adminDashboard");
        } else {
          // Handle errors or invalid input
          alert("Failed to delete user account. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred while deleting user account.");
      });
  };

  return (
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
                  <h2 class="fw-bold mb-3 text-uppercase">Delete</h2>
                  <p class="text-white-50 mb-4">
                    Enter the UserId of the account that you wish to delete
                  </p>

                  <div class="form-outline form-white mb-4">
                    <input
                      type="int"
                      id="typeEmailX"
                      class="form-control form-control-lg"
                      value={userId}
                      onChange={(e) => setUserId(e.target.value)}
                    />
                    <label class="form-label" for="typeEmailX">
                      UserId
                    </label>
                  </div>

                  <button
                    class="btn btn-outline-light btn-lg px-5"
                    type="submit"
                    onClick={handleDelete}
                  >
                    Delete
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

export default DeleteAccount;