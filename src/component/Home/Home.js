import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="container">
      {/* dyanamic text bar */}
      <div className="rightnav">
        <h1>
          <span className="snavhead">YES BANK</span>
          <div className="message">
            <div className="word1">Finance</div>
            <div className="word2">Loans</div>
            <div className="word3">Deposite</div>
          </div>
        </h1>
      </div>
      {/* slider code start */}
      <div
        id="carouselExampleInterval"
        className="carousel slide slider"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="5000">
            <img src="Banking/img1.jpg" className="d-block w-100 simg" alt="img 1" />
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <img src="Banking/img2.jpg" className="d-block w-100 simg" alt="..." />
          </div>
          <div className="carousel-item"  data-bs-interval="5000">
            <img src="Banking/img6.jpg" className="d-block w-100 simg" alt="..." />zzz
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* transfer money div */}
      <div className="container my-1 sdiv">
        <label
          className="h3 mx-5 font-tahoma fw-bolder d-inline trftext"
          htmlFor=""
        >
          Transfer Money
        </label>
        <Link className="nav-link" to="/Transfer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="46"
            height="46"
            fill="currentColor"
            className="bi bi-person-fill csvg mx-2"
            viewBox="0 0 16 16"
          >
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          </svg>
        </Link>
        <small className="font-tahoma fw-bolder text-wrap sm1">
          Transfer To Mobile
        </small>
        <Link className="nav-link" to="/tobank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            className="bi bi-bank bsvg"
            viewBox="0 0 16 16"
          >
            <path d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.501.501 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89L8 0ZM3.777 3h8.447L8 1 3.777 3ZM2 6v7h1V6H2Zm2 0v7h2.5V6H4Zm3.5 0v7h1V6h-1Zm2 0v7H12V6H9.5ZM13 6v7h1V6h-1Zm2-1V4H1v1h14Zm-.39 9H1.39l-.25 1h13.72l-.25-1Z" />
          </svg>
        </Link>
        <small className="font-tahoma fw-bolder text-wrap sm2">
          To Bank / UPI Id
        </small>
        <Link className="nav-link" to="/selfac">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="43"
            height="43"
            fill="currentColor"
            className="bi bi-file-arrow-down ssvg"
            viewBox="0 0 16 16"
          >
            <path d="M8 5a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5A.5.5 0 0 1 8 5z" />
            <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
          </svg>
        </Link>
        <small className="font-tahoma fw-bolder text-wrap sm3">
          To Self Account
        </small>
        <Link className="nav-link" to="/blac">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            fill="currentColor"
            className="bi bi-bank2 blsvg"
            viewBox="0 0 16 16"
          >
            <path d="M8.277.084a.5.5 0 0 0-.554 0l-7.5 5A.5.5 0 0 0 .5 6h1.875v7H1.5a.5.5 0 0 0 0 1h13a.5.5 0 1 0 0-1h-.875V6H15.5a.5.5 0 0 0 .277-.916l-7.5-5zM12.375 6v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zM8 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM.5 15a.5.5 0 0 0 0 1h15a.5.5 0 1 0 0-1H.5z" />
          </svg>
        </Link>
        <small className="font-tahoma fw-bolder text-wrap sm4">
          Chake Balance
        </small>
      </div>
      {/* My upi id div */}
      <div className="container upidiv my-2">
        <b className="font-tahoma tupi"> UPI Id : 902xxxxxx@ybl</b>
      </div>
      {/* wallet div */}
      <div className="container my-5">
        <Link className="nav-link" to="/wallet">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            fill="currentColor"
            className="bi bi-credit-card walletdiv1 mt-4"
            viewBox="0 0 16 16"
          >
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z" />
            <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z" />
          </svg>
        </Link>
        <small className="S fw-bolder text-wrap sm5 mt-4">My Wallet</small>
        <Link className="nav-link" to="/rewards">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="46"
            height="46"
            fill="currentColor"
            className="bi bi-gift walletdiv2 mt-4"
            viewBox="0 0 16 16"
          >
            <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zM1 4v2h6V4H1zm8 0v2h6V4H9zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5V7zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5H7z" />
          </svg>
        </Link>
        <small className="S fw-bolder text-wrap sm6 mt-4">Rewards</small>
        <Link className="nav-link" to="/refer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="46"
            height="46"
            fill="currentColor"
            className="bi bi-megaphone walletdiv3 mt-4"
            viewBox="0 0 16 16"
          >
            <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-.214c-2.162-1.241-4.49-1.843-6.912-2.083l.405 2.712A1 1 0 0 1 5.51 15.1h-.548a1 1 0 0 1-.916-.599l-1.85-3.49a68.14 68.14 0 0 0-.202-.003A2.014 2.014 0 0 1 0 9V7a2.02 2.02 0 0 1 1.992-2.013 74.663 74.663 0 0 0 2.483-.075c3.043-.154 6.148-.849 8.525-2.199V2.5zm1 0v11a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0zm-1 1.35c-2.344 1.205-5.209 1.842-8 2.033v4.233c.18.01.359.022.537.036 2.568.189 5.093.744 7.463 1.993V3.85zm-9 6.215v-4.13a95.09 95.09 0 0 1-1.992.052A1.02 1.02 0 0 0 1 7v2c0 .55.448 1.002 1.006 1.009A60.49 60.49 0 0 1 4 10.065zm-.657.975 1.609 3.037.01.024h.548l-.002-.014-.443-2.966a68.019 68.019 0 0 0-1.722-.082z" />
          </svg>
        </Link>
        <small className="S fw-bolder text-wrap sm7 mt-4">Refer</small>
      </div>
      {/* switch start */}
      <div className="container">
        <label
          className="h3 mx-5 text-light font-tahoma fw-bolder d-inline trftext2"
          htmlFor=""
        >
          Switch
        </label>
        <a href="https://www.zomato.com/">
          <img className="m-3 app1" src="Banking/Zomato.PNG" alt="img not found" />
          <small className="S fw-bolder text-wrap sm8 mt-4">Zomato</small>
        </a>
        <a href="https://www.flipkart.com/">
        <img className="m-3 app2" src="Banking/Flipkart.PNG" alt="img not found" />
        <small className="S fw-bolder text-wrap sm9 mt-4">Flipkart</small>
        </a>
        <a href="https://www.facebook.com/">
        <img className="m-3 app3" src="Banking/Facebook.PNG" alt="img not found" />
        <small className="S fw-bolder text-wrap sm10 mt-4">Facebook</small>
        </a>
      </div>


{/* Footer */}

<div className="container footer">
  <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><a href="/" className="nav-link px-2 text-light">Home</a></li>
      <li className="nav-item"><a href="/" className="nav-link px-2 text-light">Features</a></li>
      <li className="nav-item"><a href="/" className="nav-link px-2 text-light">Pricing</a></li>
      <li className="nav-item"><a href="/" className="nav-link px-2 text-light">FAQs</a></li>
      <li className="nav-item"><a href="/" className="nav-link px-2 text-light">About</a></li>
    </ul>
    <p className="text-center text-light">© 2022 Company, Inc</p>
  </footer>
</div>
{/* body container end */}
    </div>
  );
}
