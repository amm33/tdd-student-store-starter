import * as React from "react";
import ProductCard from "../../ProductGrid/ProductCard/ProductCard";
import "./ProductView.css";

export default function ProductView({
  product,
  productId,
  quantity,
  handleAddItemToCart,
  handleRemoveItemToCart,
}) {
  return (
    <div className="product-view">
      <h1 className="product-id">Product #{productId}</h1>
      <ProductCard product={product} showDescription={true} quantity={quantity}>
        {" "}
      </ProductCard>
    </div>
  );
}
