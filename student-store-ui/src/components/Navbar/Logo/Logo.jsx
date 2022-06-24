import React from "react";
import "./Logo.css";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="Logo">
      <Link to="/">
        <img src="https://codepath-student-store-demo.surge.sh/assets/codepath.f1b3e41a.svg"></img>
      </Link>
    </div>
  );
};

export default Logo;
