import * as React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="ContactUs">
      <div className="contact-info">
        <h2>Contact Us</h2>
        <ul>
          <h3>Email: code@path.org</h3>
          <h3>Phone: 1-800-CODEPATH</h3>
          <h3>Adress: 123 Fake Street, San Francisco, CA</h3>
          <h3>Socials: </h3>
        </ul>
        <img
          className="contactUs-img"
          src="https://codepath-student-store-demo.surge.sh/assets/happy_person.517b658d.svg"
        ></img>
      </div>
    </div>
  );
};

export default ContactUs;
