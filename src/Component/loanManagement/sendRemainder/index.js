import React from 'react'

function sendRemainder() {
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
                  <h2 class="fw-bold mb-3 text-uppercase">Send Remainders</h2>
                  <p class="text-white-50 mb-4">
                    Are you sure that you want to send remainders to the users with status as borrowed even after due date.
                  </p>
                  <p class="text-white-50 mb-4">
                    Please make sure to track the due date to get the updated values of fine issued before sending remainders.
                  </p>

                  <button
                    class="btn btn-outline-light btn-lg px-5"
                    type="submit"
                  >
                    Send
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default sendRemainder