// import * as React from "react";
// import "./Sidebar.css";
// import ShoppingCart from "./ShoppingCart/ShoppingCart";
// import CheckoutForm from "../Navbar/CheckoutForm/CheckoutForm";
// import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
// import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
// import MenuIcon from "@mui/icons-material/Menu";

// // import {
// //   FiHome,
// //   FiLogOut,
// //   FiArrowLeftCircle,
// //   FiArrowRightCircle,
// // } from "react-icons/fi";

// export default function Sidebar({
//   isOpen,
//   shoppingCart,
//   products,
//   checkoutForm,
//   handleOnCheckoutFormChange,
//   handleOnSubmitCheckoutForm,
//   handleOnToggle = () => {},
// }) {
//   return (
//     <div className="sideBar">
//       <section className={isOpen ? "sidebar" : "sidebar-closed"}>
//         <div className="buttonDiv">
//           <button className="toggle-button" onClick={handleOnToggle}>
//             &times;
//             {/* <MenuIcon /> */}
//           </button>

//           <div className="content">
//             {/* <CheckoutForm
//               products={products}
//               handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
//               handleOnCheckoutFormChange={handleOnCheckoutFormChange}
//               isOpen={isOpen}
//               shoppingCart={shoppingCart}
//               checkoutForm={checkoutForm}
//             /> */}
//           </div>
//         </div>
//         {/* <ShoppingCart
//           isOpen={props.isOpen}
//           shoppingCart={props.shoppingCart}
//           products={props.products}
//         /> */}
//       </section>
//     </div>
//   );
// }

import * as React from "react";
import "./Sidebar.css";
import CheckoutForm from "../Navbar/CheckoutForm/CheckoutForm";

// export default function Sidebar({
//   isOpen,
//   shoppingCart,
//   products,
//   checkoutForm,
//   handleOnCheckoutFormChange,
//   handleOnSubmitCheckoutForm,
//   handleOnToggle,
// }) {
//   return (
//     <section className="sidebar">
//       {isOpen ? (
//         <div className="sidebar-open">
//           <button
//             className="close-sidebar-button"
//             onClick={handleOnToggle}
//           ></button>
//         </div>
//       ) : (
//         <div className="sidebar-closed">
//           <div className="button-wrap">
//             <button
//               className="open-sidebar-button"
//               onClick={handleOnToggle}
//             ></button>
//           </div>
//         </div>
//       )}
//       <CheckoutForm
//         // handleOnSubmitCheckoutForm={handleOnCheckoutForm}
//         // handleOnCheckoutFormChange={handleOnCheckoutFormChange}
//         isOpen={isOpen}
//         shoppingCart={shoppingCart}
//         checkoutForm={checkoutForm}
//       />
//     </section>
//   );
// }

export default function Sidebar(props) {
  return (
    <section className="sidebar">
      <section className={props.isOpen ? "sidenav open" : "sidenav closed"}>
        <div className="allitems">
          <button
            className={
              props.isOpen ? "toggle-button open" : "toggle-button closed"
            }
            onClick={props.handleOnToggle}
          >
            <i className="material-icons md-48">arrow_forward</i>
          </button>
          <div className="cart-icons">
            <button
              className={props.isOpen ? "closedIcon open" : "closedIcon closed"}
            >
              <i
                className="material-icons md-48"
                onClick={props.handleOnToggle}
              >
                add_shopping_cart
              </i>
            </button>
            <button
              className={props.isOpen ? "closedIcon open" : "closedIcon closed"}
            >
              <i
                className="material-icons md-48"
                onClick={props.handleOnToggle}
              >
                monetization_on
              </i>
            </button>
            <button
              className={props.isOpen ? "closedIcon open" : "closedIcon closed"}
            >
              <i
                className="material-icons md-48"
                onClick={props.handleOnToggle}
              >
                fact_check
              </i>
            </button>
          </div>
        </div>
        {/* <ShoppingCart
          isOpen={props.isOpen}
          shoppingCart={props.shoppingCart}
          products={props.products}
          subtotal={props.subtotal}
          quantity={props.shoppingCart.length}
        /> */}
        <CheckoutForm
          // handleOnSubmitCheckoutForm={props.handleOnSubmitCheckoutForm}
          // handleOnCheckoutFormChange={props.handleOnCheckoutFormChange}
          isOpen={props.isOpen}
          shoppingCart={props.shoppingCart}
          checkoutForm={props.checkoutForm}
        />
      </section>
    </section>
  );
}
