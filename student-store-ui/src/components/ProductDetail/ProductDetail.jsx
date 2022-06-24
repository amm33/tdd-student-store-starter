import * as React from "react";
import "./ProductDetail.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import NotFound from "../NotFound/NotFound";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import ProductView from "./ProductView/ProductView";

export default function ProductDetail({
  handleAddItemToCart,
  handleRemoveItemToCart,
}) {
  const [product, setProduct] = useState(null);
  let { productId } = useParams();
  //getting data for the products based on their id -similar way in app
  useEffect(async () => {
    let url = `https://codepath-store-api.herokuapp.com/store/` + productId;
    await axios
      .get(url)
      .then((response) => {
        console.log("Response " + response);
        let responseD = response.data;
        setProduct(responseD.product);
        console.log("Response.data " + response.data);
        console.log(responseD);
        // console.log(products);
      })
      .catch((err) => {
        setError(err);
        // console.log(err);
      });
  }, []);

  return (
    <div className="product-detail">
      <Navbar />
      <Sidebar />
      <p>Product Detail</p>
      <ProductView product={product}></ProductView>

      <h1 className="loading"></h1>
    </div>
  );
}
