import * as React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <FooterColumn
          label="Categories"
          links={["All Categories", "Clothing", "Food", "Accessories", "Tech"]}
        />
      </div>
      <div className="footer-container">
        <FooterColumn
          label="Company"
          links={["About Us", "Find a Store", "Terms", "Sitemap", "Careers"]}
        />
      </div>
      <div className="footer-container">
        <FooterColumn
          label="Support"
          links={[
            "Contact Us",
            "Money Refund",
            "Order Status",
            "Shipping Info",
            "Open Dispute",
          ]}
        />
      </div>
      <div className="footer-container">
        <FooterColumn
          label="Account"
          links={["Login", "Register", "Account Setting", "My Orders"]}
        />
      </div>
      <div className="footer-container">
        <FooterColumn
          label="Socials"
          links={["Facebook", "Twitter", "LinkedIn", "Instagram", "YouTube"]}
        />
      </div>

      <div className="apps">
        <h3>Our App</h3>
        <div className="App-Store">
          <img src="https://codepath-student-store-demo.surge.sh/assets/app_store.a7d8c549.svg"></img>
        </div>
        <div className="Google-Play">
          <img src="https://codepath-student-store-demo.surge.sh/assets/google_play.27aab7c8.svg"></img>
        </div>
      </div>

      <div className="payment">
        <img src="https://codepath-student-store-demo.surge.sh/assets/american_express.40f242c7.svg"></img>
        <img src="https://codepath-student-store-demo.surge.sh/assets/mastercard.c75b7bc4.svg"></img>
        <img src="https://codepath-student-store-demo.surge.sh/assets/paypal.6a45b239.svg"></img>
        <img src="https://codepath-student-store-demo.surge.sh/assets/visa.a818ddc4.svg"></img>
      </div>
    </div>
  );
}

export function FooterColumn({ label, links }) {
  return (
    <div className="column">
      <h3>{label}</h3>
      {links.map((link, i) => (
        <p key={i}>{link}</p>
      ))}
    </div>
  );
}
