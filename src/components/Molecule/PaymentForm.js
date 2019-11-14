import React from "react";

function PaymentForm() {
  return (
    <div className="container px-3">
      <div className="row my-2 flex-column">
        <label className="row mx-2">Card name</label>
        <input
          placeholder="Name"
          className="row mx-2 rounded border border-dark p-1"
        />
      </div>
      <div className="row my-2 flex-column">
        <label className="row mx-2">Card Number</label>
        <input
          placeholder="Number"
          className="row mx-2 rounded border border-dark p-1"
        />
      </div>
      <div className="row mx-1 flex-row my-2">
        <div className="row flex-column align-items-start">
          <label>Expiry Date</label>
          <input
            placeholder="xx/xx"
            className="col-5 rounded border border-dark p-1"
          />
        </div>
        <div className="row flex-column align-items-start">
          <label className="flex-start">CVV</label>
          <input
            placeholder="XXX"
            className="col-5 rounded border border-dark p-1"
          />
        </div>
      </div>

      <div className="row mt-5 mb-3">
        <button className="border btn-dark rounded border-light w-100 text-center align-items-center justify-content">
          Edit
        </button>
      </div>
    </div>
  );
}

export default PaymentForm;
