import React from "react";

export default function Transfer() {
    function trffun (){
        alert("Transaction Successful")
    }
  return (
    <div className="container">
      <div class="mb-3 my-5">
        <label for="exampleFormControlInput1" class="form-label  text-light">
          Mobile Number
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
          Account Holder Name
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
      <button type="button"class="btn btn-primary my-4"onClick={trffun}>Transfer Money</button>



    </div>
  );
}
