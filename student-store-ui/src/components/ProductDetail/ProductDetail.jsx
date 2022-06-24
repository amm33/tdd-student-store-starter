import * as React from "react";
import "./ProductDetail.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import NotFound from "../NotFound/NotFound";
// import { Params } from "react-router-dom";

export default function ProductDetail() {
  return (
    <div className="productDetail">
      <Navbar />
      <Sidebar />
      <NotFound />
      <p>Product Detail</p>
    </div>
  );
}
