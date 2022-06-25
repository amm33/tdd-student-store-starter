import * as React from "react";
import "./CheckoutForm.css";

export default function CheckoutForm(props) {
  return (
    <div className={props.isOpen ? "checkout-form" : "checkout-form closed"}>
      <h3>
        Payment Info
        <span>
          <i className="material-icons md-48">monetization_on</i>
        </span>
      </h3>
      <div className="input-field">
        <label className="name">Name</label>
        <div className="control">
          <input
            name="name"
            className="checkout-form-input"
            type="text"
            placeholder="Student Name"
          ></input>
        </div>
      </div>
      <div className="input-field">
        <label className="email">Email</label>
        <div className="input">
          <input
            name="email"
            className="checkout-form-input"
            type="email"
            placeholder="student@codepath.org"
          ></input>
        </div>
      </div>
      <div className="checkbox-field">
        <div className="checkbox">
          <label className="checkbox">
            <input name="TermsAndConditions" type="checkbox"></input>
            <span className="label">
              {"I agree to the "}
              <a
                className="termsandconditions"
                href="https://codepath-student-store-demo.surge.sh/#terms-and-conditions"
              >
                terms and conditions
              </a>
            </span>
          </label>
        </div>
      </div>
      <div className="checkout field">
        <div className="checkout">
          <button className="checkout-button">Checkout</button>
        </div>
      </div>
      <div className="success">
        <h3>
          Checkout Info
          <span>
            <i className="material-icons md-48">fact_check</i>
          </span>
        </h3>
        <div className="success-info">
          <p>
            {" "}
            A confirmation email will be sent to you to confirm receipt of this
            order. Once confirmed, the order will be delivered to your
            residence.
          </p>
        </div>
      </div>
    </div>
  );
}

// const CheckoutForm = () => {
//   return (
//     <div>
//       <h4>Payment Info</h4>
//       <h4 style={{ fontWeight: "normal" }}>Name</h4>
//       <input type={"text"} placeholder="Name"></input>
//       <h4 style={{ fontWeight: "normal" }}>Email</h4>
//       <input type={"email"} placeholder="student@codepath.org"></input>
//       <input type={"checkbox"}></input>
//       <label>I agree to the terms and conditions</label>
//     </div>
//   );
// };

// export default CheckForm;
