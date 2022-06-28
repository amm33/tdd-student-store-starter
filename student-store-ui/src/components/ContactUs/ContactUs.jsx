import * as React from "react";
import "./ContactUs.css";
import { SocialIcon } from "react-social-icons";

//structure of the contact us section
const ContactUs = () => {
  return (
    <div className="ContactUs">
      <div className="contact-info">
        <a id="ContactUs">
          <h3>Contact Us</h3>
        </a>
        <div className="summary">
          <ul className="info">
            <li>
              <span>Email: </span>
              <span>code@path.org</span>
            </li>
            <li>
              <span>Phone: </span>
              <span> 1-800-CODEPATH</span>
            </li>
            <li>
              <span>Address: </span>
              <span>123 Fake Street, San Francisco, CA</span>
            </li>
            <li>
              <span>Socials: </span>
              <span className="socials-icon">
                <SocialIcon
                  url="https://twitter.com/codepath?lang=en"
                  bgColor="#2c4047"
                  fgColor="#fff"
                />
                <SocialIcon
                  url="https://www.instagram.com/codepathorg/?hl=en"
                  bgColor="#2c4047"
                  fgColor="#fff"
                />
                <SocialIcon
                  uel="https://www.facebook.com/codepath.org/"
                  bgColor="#2c4047"
                  fgColor="#fff"
                />
              </span>
            </li>
          </ul>
        </div>
        <div className="media">
          <img
            className="contactUs-img"
            src="https://codepath-student-store-demo.surge.sh/assets/happy_person.517b658d.svg"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
