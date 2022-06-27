// import * as React from "react";
// import "./ProductDetail.css";
// import Navbar from "../Navbar/Navbar";
// import Sidebar from "../Sidebar/Sidebar";
// import NotFound from "../NotFound/NotFound";
// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import ProductView from "./ProductView/ProductView";
// import { color } from "@mui/system";

// // import ProductImage from "./ProductImage/ProductImage";
// // import ProductInfo from "./ProductInfo/ProductInfo";

// export default function ProductDetail({
//   handleAddItemToCart,
//   handleRemoveItemToCart,
//   handleOnToggle,
//   isOpen,
//   shoppingCart,
// }) {
//   const [product, setProduct] = useState(null);
//   let { productId } = useParams();

//   //getting data for the products based on their id -similar way in app
//   useEffect(async () => {
//     let url = `https://codepath-store-api.herokuapp.com/store/` + productId;
//     await axios
//       .get(url)
//       .then((response) => {
//         console.log("Response " + response);
//         let responseD = response.data;
//         setProduct(responseD.product);
//         console.log("Response.data " + response.data);
//         console.log(responseD);
//         // console.log(products);
//       })
//       .catch((err) => {
//         setError(err);
//         // console.log(err);
//       });
//   }, []);

//   return (
//     <div className="product-detail">
//       <Navbar />
//       <Sidebar isOpen={isOpen} handleOnToggle={handleOnToggle} />

//       <p>Product Detail</p>
{
  /* <ProductView product={product} productId={productId}></ProductView> */
}
{
  /* <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "black",
        }}
      >
        <h1 className="product-name">{product.name}</h1>
      </div>
      <br /> */
}

{
  /* <ul gutter={[16, 16]}>
        <span lg={12} xs={24} style={{ color: "black" }}>
          Product Image
          <img
            src={product.image}
            style={{ width: "280px", height: "280px" }}
          ></img> */
}
{
  /* <ProductImage detail={product} /> */
}
{
  /* </span>
        <span lg={12} xs={24} style={{ color: "black" }}> */
}
{
  /* <ProductInfo detail={product} /> */
}
{
  /* Product Details */
}
{
  /* <div className="product-description">
            {product.description}
            <div className="product-price">${product.price.toFixed(2)}</div>
          </div>
        </span> */
}
{
  /* </ul> */
}
{
  /* <h1 className="loading"></h1>
    </div>
  );
} */
}

import * as React from "react";
import "./ProductDetail.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import ProductView from "./ProductView/ProductView";
import axios from "axios";

export function ProductDetail({
  isOpen,
  handleOnToggle,
  addItems,
  removeItems,
  shoppingCart,
  handleOnCheckoutFormChange,
  handleOnSubmitCheckoutForm,
  checkoutForm,
  products,
  subtotal,
  handleAddItemToCart,
  handleRemoveItemFromCart,
  showDescription,
}) {
  const [product, setProduct] = useState();
  const params = useParams();
  console.log("id=", params.productId);

  useEffect(() => {
    axios
      .get("https://codepath-store-api.herokuapp.com/store/" + params.productId)
      .then((res) => {
        setProduct(res.data.product);
      });
  }, []);

  return (
    <div className="product-detail">
      <Sidebar
        isOpen={isOpen}
        handleOnToggle={handleOnToggle}
        handleOnCheckoutFormChange={handleOnCheckoutFormChange}
        handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
        checkoutForm={checkoutForm}
        shoppingCart={shoppingCart}
        products={products}
        subtotal={subtotal}
      />
      <Navbar />
      {!product ? null : (
        <ProductView
          product={product}
          productId={params.productId}
          // quantity={
          //   shoppingCart.find((item) => item.itemId === product.id)
          //     ? shoppingCart.find((item) => item.itemId === product.id).quantity
          //     : null
          // }
          addItems={addItems}
          removeItems={removeItems}
          shoppingCart={shoppingCart}
          showDescription={showDescription}
          handleAddItemToCart={handleAddItemToCart}
          handleRemoveItemFromCart={handleRemoveItemFromCart}
        />
      )}
    </div>
  );
}

export default ProductDetail;
