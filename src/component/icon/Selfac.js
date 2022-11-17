import React from "react";

export default function Selfac() {
  function tobank() {
    alert("Transaction Successful");
  }
  return (
    <div>
      <div className="container">
        <div class="mb-3 my-5">
          <label for="exampleFormControlInput1" class="form-label  text-light">
          Reciver  Account Number
          </label>
          <input
            type="Number"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="123xxxxxxx"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label text-light">
            Reciver Account Name
          </label>
          <input
            type="Text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="xyz"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label text-light">
            Amount
          </label>
          <input
            type="Number"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="123xxxx"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label text-light">
            IFSC Code
          </label>
          <input
            type="Number"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="123xxxx"
          />
        </div>
        <button type="button" class="btn btn-primary my-4" onClick={tobank}>
          Transfer Money
        </button>
      </div>
    </div>
  );
}
