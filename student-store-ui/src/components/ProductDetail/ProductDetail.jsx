import * as React from "react";
import "./ProductDetail.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import NotFound from "../NotFound/NotFound";

export default function ProductDetail(props) {
  return (
    <div className="productDetail">
      <Navbar />
      <Sidebar />
      <NotFound />
      <p>Product Detail</p>
    </div>
  );
}
