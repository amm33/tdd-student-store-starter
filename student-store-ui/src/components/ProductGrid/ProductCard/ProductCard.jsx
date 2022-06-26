// import * as React from "react";
// import "./ProductCard.css";
// import { Link } from "react-router-dom";

// export default function ProductCard({
//   product,
//   productId,
//   quantity,
//   handleAddItemToCart,
//   handleRemoveItemFromCart,
//   showDescription,
// }) {
//   return (
//     <div className="product-card">
//       {/* <p>Product Card</p> */}

//       <div className="media">
//         <Link to={"/products/" + product.id}>
//           <img src={product.image}></img>
//         </Link>
//       </div>

//       <div className="product-info">
//         <p className="product-name">{product.name}</p>
//         <div className="stars"></div>
//         {/* <button className="add" onClick=""></button>
//         <button className="remove" onClick=""></button> */}
//         <p className="product-price">${product.price.toFixed(2)}</p>
//       </div>

//       {/* description */}
//       <div>
//         {showDescription ? (
//           <p className="product-description">{product.description}</p>
//         ) : null}
//       </div>

//       <div className="buttons">
//         <button className="add" onClick={() => handleAddItemToCart(product.id)}>
//           <i className="icons">Add</i>
//         </button>
//         <button
//           className="remove"
//           onClick={() => props.handleRemoveItemFromCart(product.id)}
//         >
//           <i className="icons">Remove</i>
//         </button>
//       </div>

//       <div>
//         {quantity ? (
//           <span className="product-quantity">{product.quantity}</span>
//         ) : null}
//       </div>
//     </div>
//   );
// }

import * as React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";
// import ShoppingCart from "../ShoppingCart/ShoppingCart";

export default function ProductCard({
  product,
  productId,
  quantity,
  handleAddItemToCart,
  handleRemoveItemFromCart,
  showDescription,
}) {
  return (
    <div className="product-card">
      <div className="media">
        <Link to={"/products/" + product.id}>
          <img src={product.image} />
        </Link>
      </div>
      <div className="product-info">
        <div className="main-info">
          <p className="product-name">{product.name}</p>
          <div className="stars">
            <i className="material-icons">star</i>
            <i className="material-icons">star</i>
            <i className="material-icons">star</i>
            <i className="material-icons">star</i>
            <i className="material-icons">star_half</i>
          </div>
          <p className="product-price"> {"$" + product.price.toFixed(2)}</p>
        </div>
        <div className="actions">
          {showDescription ? (
            <p className="product-description">{product.description}</p>
          ) : null}
          <div className="buttons">
            <button
              className="add"
              onClick={() => handleAddItemToCart(product.id)}
            >
              {" "}
              <i className="material-icons">add</i>
            </button>
            <button
              className="remove"
              onClick={() => handleRemoveItemFromCart(product.id)}
            >
              {" "}
              <i className="material-icons">remove</i>
            </button>
          </div>

          {quantity ? (
            <span className="product-quantity">{quantity}</span>
          ) : null}
        </div>
      </div>
    </div>
  );
}
