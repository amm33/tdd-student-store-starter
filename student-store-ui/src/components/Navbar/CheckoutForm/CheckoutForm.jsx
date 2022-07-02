import * as React from "react";
import "./CheckoutForm.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function CheckoutForm(props) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  //email
  const handleOnEmailChange = (event) => {
    setEmail(event.target.value);
  };

  //name
  const handleOnNameChange = (event) => {
    setName(event.target.value);
  };

  //checkout stuff
  const handleOnCheckOut = () => {
    var userInfo = {
      name: name,
      email: email,
    };
    axios.post(`http://localhost:3001/store`, {
      shoppingCart: props.shoppingCart,
      user: userInfo,
    });

    // props.setShoppingCart([]);
    document.getElementById("nameInput").value = "";
    document.getElementById("email").value = "";
  };

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
            id="nameInput"
            name="name"
            className="checkout-form-input"
            type="text"
            placeholder="Student Name"
            // value="checkoutForm.name"
            onChange={handleOnNameChange}
          ></input>
        </div>
      </div>
      <div className="input-field">
        <label className="email">Email</label>
        <div className="input">
          <input
            id="email"
            name="email"
            className="checkout-form-input"
            type="email"
            placeholder="student@codepath.org"
            // value="checkoutForm.email"
            onChange={handleOnEmailChange}
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
          <button
            className="checkout-button"
            disabled={props.shoppingCart?.length ? false : true}
            onClick={handleOnCheckOut}
          >
            Checkout
          </button>
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
            order. Once confirmed, the order will be delivered to your dorm
            room.
          </p>
        </div>
      </div>
    </div>
  );
}
