import * as React from "react";
import "./ProductGrid.css";
import ProductCard from "./ProductCard/ProductCard";

export default function ProductGrid(props) {
  return (
    <div className="product-grid">
      {/* mapping through the products and create product card for each*/}

      {props.products
        ? props.products.map((product, i) => {
            return (
              <ProductCard
                product={product}
                productId={product.id}
                showDescription={false}
                key={i}
                quantity={
                  props.shoppingCart.find((item) => item.itemId === product.id)
                    ? props.shoppingCart.find(
                        (item) => item.itemId === product.id
                      ).quantity
                    : null
                }
                handleAddItemToCart={props.handleAddItemToCart}
                handleRemoveItemFromCart={props.handleRemoveItemFromCart}
                shoppingCart={props.shoppingCart}
              ></ProductCard>
            );
          })
        : null}
    </div>
  );
}
