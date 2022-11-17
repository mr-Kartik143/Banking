import React from "react";

export default function Contact() {
  return (
    <div>
      <div
        className="bg-dark container-fluid"
        style={{ height: "100vh", margin: "0px", padding: "0px" }}
      >
        <main class="container">
          <div class="d-flex align-items-center bg-dark p-3  text-light bg-purple rounded shadow-sm">
            <div class="lh-1">
              <h1 class="h6 mb-0 m-3 text-light lh-1">CONTACT US - YES BANK</h1>
            </div>
          </div>

          <div class="my-3  bg-body rounded shadow-sm bg-dark">
            <h6 class="border-bottom bg-dark text-light pb-2 mb-0"></h6>
            <div class="d-flex text-muted pt-3 bg-dark">
              <svg
                class="bg-dark bd-placeholder-img flex-shrink-0 me-2 rounded"
                width="32"
                height="32"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: 32x32"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#007bff"></rect>
                <text x="50%" y="50%" fill="#007bff" dy=".3em">
                  32x32
                </text>
              </svg>

              <p class="bg-dark pb-3 mb-0 small lh-sm border-bottom">
                <strong class="bg-dark d-block text-gray-dark ">
                  Helpline
                </strong>
                Tel No - 1800-1200
                <br />
                <small> Timings: 8:00 AM - 8:00 PM</small>
                <br />
                <small>
                  (Post 8 PM till 8 AM only critical service offered)
                </small>
              </p>
            </div>
          </div>
          <div class="my-3  bg-body rounded shadow-sm bg-dark">
            <h6 class="border-bottom bg-dark text-light pb-2 mb-0"></h6>
            <div class="bg-dark d-flex text-muted pt-3">
              <svg
                class="bd-placeholder-img flex-shrink-0 me-2 rounded"
                width="32"
                height="32"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: 32x32"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <rect width="100%" height="100%" fill="#e83e8c"></rect>
                <text x="50%" y="50%" fill="#e83e8c" dy=".3em">
                  32x32
                </text>
              </svg>

              <p class="bg-dark pb-3 mb-0 small lh-sm border-bottom">
                <strong class="bg-dark d-block text-gray-dark ">
                  Email & SMS
                </strong>
                yestouch@yesbank.in
                <br />
                <small>SMS ‘HELP’ space CUST ID</small>
                <br />
                <small>
                  (Post 8 PM till 8 AM only critical service offered)
                </small>
              </p>
            </div>
          </div>

          <div class="my-3  bg-body rounded shadow-sm bg-dark">
            <h6 class="border-bottom bg-dark text-light pb-2 mb-0"></h6>
            <div class="d-flex text-muted pt-3 bg-dark">
              <svg
                class="bg-dark bd-placeholder-img flex-shrink-0 me-2 rounded"
                width="32"
                height="32"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: 32x32"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#007bff"></rect>
                <text x="50%" y="50%" fill="#007bff" dy=".3em">
                  32x32
                </text>
              </svg>

              <p class="bg-dark pb-3 mb-0 small lh-sm border-bottom">
                <strong class="bg-dark d-block text-gray-dark ">
                  Board line Numbers
                </strong>
                +91 (22) 5091 9800 <br />
                +91 (22) 6507 9800
                <br />
                <small> Timings: 8:00 AM - 8:00 PM</small>
                <br />
                <small>For Corporate Queries, call us at:</small>
                <br />
                <small>
                  (Post 8 PM till 8 AM only critical service offered)
                </small>
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
