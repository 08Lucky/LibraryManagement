import React from "react";
import Header from "../header/index";

function LandingPage() {
  return (
    <div>
      <Header />
      <div class="row d-flex justify-content-center p-4">
        <div class="col-sm-5 mb-3 mb-sm-0">
          <div class="card">
            <div class="card-body">
            <img src="/images/adminlogo.jpg" class="card-img-top" alt="Wild Landscape" style={{height: '270px'}}/>

              <h5 class="card-title">Librarian Access Space</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="/adminLogin" class="btn btn-primary">
              Click Me!
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-5 mb-3 mb-sm-0">
          <div class="card">
            <div class="card-body">
            <img src="/images/userlogo.png" class="card-img-top" alt="Wild Landscape" style={{height: '270px'}}/>

              <h5 class="card-title">User Access Space</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="/userLogin" class="btn btn-primary">
                Click Me!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
