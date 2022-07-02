const Store = require("../models/store");
const express = require("express");
const { getProductsWithId } = require("../models/store");
const { BadRequestError } = require("../utils/errors");
const { json } = require("express");

const router = express.Router();

router.get("/:productId", (req, res, next) => {
  const prodId = req.params.productId;
  const product = Store.getProductsWithId(Number(prodId));
  res.status(200).json({ product: product });
});

router.post("/", (req, res, next) => {
  try {
    const purchases = req.body;
    const shopCart = purchases.shoppingCart;
    const user = purchases.user;

    //errors
    if (!shopCart || !user || Store.checkErrors(shopCart)) {
      return next(new BadRequestError("Invalid Input"));
    }

    const data = Store.purchaseOrder(shopCart, user);
    res.status(201) / json({ purchase: data });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
