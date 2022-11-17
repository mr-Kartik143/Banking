

import React from "react";


export default function About() {
  return (
    <div
      className="bg-dark container-fluid"
      style={{ height: "100vh", margin: "0px", padding: "0px" }}
    >
      <main class="container">
        <div class="d-flex align-items-center bg-dark p-3  text-light bg-purple rounded shadow-sm">
          <div class="lh-1">
            <h1 class="h6 mb-0  text-light lh-1">YES BANK</h1>
            <small>Since 2002</small>
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
              <strong class="bg-dark d-block text-gray-dark">Yes Bank</strong>
              Yes Bank is an Indian bank headquartered in Mumbai, India [6] and
              was founded by Rana Kapoor and Ashok Kapoor in 2004. [7] It offers
              wide range of differentiated products for corporate and retail
              customers through retail banking and asset management services.
            </p>
          </div>
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

            <p class="pb-3 mb-0 small lh-sm border-bottom">
              <strong class="d-block text-gray-dark">Mobile Banking</strong>
              a. Once you have downloaded the YES Mobile app from Google Play
              Store or iOS App Store, you need to follow a simple 3-step
              registration process. b. Tap on Login and authenticate yourself
              using one of the following credentials: Retail NetBanking Login ID
              and Password Or Customer ID, Debit Card Number and PIN Or Credit
              Card Number, Expiry Date and Date of Birth Or Aadhaar Information
              – Aadhaar Number, Date of Birth and Customer ID c. Post successful
              authentication of your credentials, an outward SMS will be sent
              from the mobile number registered with the bank. d. Once
              successfully verified, you will be asked to set 6 digit MPIN (for
              YES Mobile app login and for authorizing transactions) e. If you
              are using an Android or iOS device having a biometric feature, you
              can also set fingerprint/ FaceID authorization for quick, easy and
              safe login to the app after setting the MPIN f. Now you are
              successfully registered for YES Mobile application. Kindly
              re-login into the app using newly created MPIN or your registered
              fingerprint/ FaceID{" "}
            </p>
          </div>
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
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#6f42c1"></rect>
              <text x="50%" y="50%" fill="#6f42c1" dy=".3em">
                32x32
              </text>
            </svg>

            <p class="pb-3 mb-0 small lh-sm border-bottom">
              <strong class="d-block text-gray-dark">Yes Family</strong>We
              understand family is the most important part of your life. You
              care for their health, take pride in securing their future, save
              for their wellbeing and most importantly enjoy the moments you
              spend together. We are proud to present our unique program for
              families like yours. This program is designed keeping in mind the
              needs of each family member by offering carefully selected
              benefits across things they care about.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
