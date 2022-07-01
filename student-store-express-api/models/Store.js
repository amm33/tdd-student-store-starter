const { storage } = require("../data/storage");
const { BadRequestError } = require("../utils/errors");

class Store {
  //function to get a product based on id
  static getProductsWithId(id) {
    const prod = storage
      .get("products")
      .value()
      // .find({ id: Number(id) });
      .find((elem) => elem.id === id);
    return prod;
  }

  //function for checking errors
  static checkErrors(cart) {
    for (let i = 0; i < cart.length; i++) {
      var current = cart[i];
      if (!current.quantity || !current.itemId) {
        return true;
      }
      for (let j = i + 1; j < cart.length; j++) {
        var acc = cart[j];
        if (current.itemId == acc.itemId) {
          return true;
        }
      }
    }
    return false;
  }

  //creating an id for the purchases
  static createAnId() {
    const purchases = storage.get("purchases").value();
    return purchases.length + 1;
  }

  //the total price of the purchase
  static totalPrice(cart) {
    var subtot = 0;
    cart.forEach((ele) => {
      var item = this.getProductsWithId(ele.itemId);
      var unitPrice = item.price;
      var elemPrice = unitPrice * ele.quantity;
      subtot += elemPrice;
    });

    subtot = Math.round((subtot + Number.EPSILON) * 100) / 100;
    return subtot;
  }

  static purchaseOrder(cart, user) {
    var order = {
      id: this.createAnId(),
      name: user.name,
      email: user.email,
      order: cart,
      total: this.totalPrice(cart) * 1.0875,
    };
    let currentPurchases = storage.get("purchases");
    currentPurchases.push(order).write();
    return order;
  }
}
module.exports = Store;

// const { storage } = require("../data/storage");

// class Storage {
//   static getProducts() {
//     return storage.get("products");
//   }

//   static getProductById(id) {
//     return storage.get("products".find({ id: Number(id) })).value();
//   }
// }
