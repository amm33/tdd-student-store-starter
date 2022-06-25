import * as React from "react";
import "./CheckoutForm.css";

const CheckoutForm = () => {
  return (
    <div>
      <h4>Payment Info</h4>
      <h4 style={{ fontWeight: "normal" }}>Name</h4>
      <input type={"text"} placeholder="Name"></input>
      <h4 style={{ fontWeight: "normal" }}>Email</h4>
      <input type={"email"} placeholder="student@codepath.org"></input>
      <input type={"checkbox"}></input>
      <label>I agree to the terms and conditions</label>
    </div>
  );
};

export default CheckForm;
