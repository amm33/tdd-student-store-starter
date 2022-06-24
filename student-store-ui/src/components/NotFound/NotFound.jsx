import React from "react";
import "./NotFound.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

const NotFound = () => {
  return (
    <div className="NotFound">
      <Navbar />
      <Sidebar />
      <p>NotFound</p>
    </div>
  );
};

export default NotFound;
