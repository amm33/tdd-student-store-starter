// const express = require("express");
// const Store = require("../models/Store");
// const router = express.Router();

// router.get("/", (req, res) => {
//   let products = Store.getProducts();
//   res.status(200).json({ products });
// });

// module.exports = router;

// const express = require("express");
// const router = express.Router();
// const Store = require("../models/store.js");

// router.get("/", async (req, res) => {
//   const products = Store.getProducts();
//   res.status(200).json({ products });
// });

// router.get("/:productId", (req, res) => {
//   const productId = req.params.productId;
//   const product = Store.getProductById(productId);
//   console.log(product);
//   res.status(200).json({ product });
// });

// router.post("/", (req, res) => {
//   const checkoutForm = req.body;
//   const purchase = Store.checkOut(checkoutForm);
//   res.status(201).json({ purchase });
// });

// module.exports = router;

const Store = require("../models/store");
const express = require("express");
const { getProductsWithId } = require("../models/store");

const router = express.Router();

router.get("/:productId", (req, res, next) => {
  const prodId = req.params.productId;
  const product = Store.getProductsWithId(Number(prodId));
  res.status(200).json({ product: product });
});

module.exports = router;
