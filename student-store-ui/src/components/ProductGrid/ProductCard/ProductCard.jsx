import * as React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

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
      {/* <p>Product Card</p> */}

      <div className="media">
        <Link to={"/products/" + product.id}>
          <img src={product.image}></img>
        </Link>
      </div>

      <div className="product-info">
        <p className="product-name">{product.name}</p>
        <p className="product-price">${product.price.toFixed(2)}</p>
      </div>

      {/* description */}
      <div>
        {showDescription ? (
          <p className="product-description">{product.description}</p>
        ) : null}
      </div>

      <div>
        <span className="product-quantity">{product.quantity}</span>
      </div>
    </div>
  );
}
