const { storage } = require("../data/storage");
const { BadRequestError } = require("../utils/errors");

class Store {
  //function to get products
  static getProducts() {
    const products = storage.get("products").value();

    return products;
  }

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

  //date info
  static createDate() {
    var current = new Date();
    var year = current.getFullYear();
    var month = current.getMonth() + 1;
    var day = current.getDate();
    var hours = current.getHours();
    var minutes = current.getMinutes();
    var seconds = current.getSeconds();
    var date =
      "Date: " +
      month +
      "/" +
      day +
      "/" +
      year +
      " Time: " +
      hours +
      ":" +
      minutes +
      ":" +
      seconds;
    return date;
  }

  //reciept stuff
  static createReceipt(cart, user) {
    var info = {
      name: user.name,
      email: user.email,
    };

    var lines = [
      "Receipt for " + user.name + " available with email " + user.email,
    ];
    cart.forEach((element) => {
      var item = this.getProductsWithId(element.itemId);
      var unitPrice = item.price;
      var elemPrice = unitPrice * element.quantity;
      var line =
        element.quantity +
        " total " +
        item.name +
        " purchased at a cost of  $" +
        unitPrice.toFixed(2) +
        " for a total cost of $" +
        elemPrice.toFixed(2) +
        ".";
      lines.push(line);
    });
    var totalCost = this.totalPrice(cart);
    var taxcost = totalCost * 1.0875;
    var subtotal = "Before taxes and fees: $" + totalCost;
    var total = "After taxes and fees: $" + taxcost.toFixed(2);
    lines.push(subtotal);
    lines.push(total);

    var reciept = { userInfo: info, lines: lines };
    return reciept;
  }

  static purchaseOrder(cart, user) {
    var order = {
      id: this.createAnId(),
      name: user.name,
      email: user.email,
      order: cart,
      total: (this.totalPrice(cart) * 1.0875).toFixed(2),
      createdAt: this.createDate(),
      receipt: this.createReceipt(cart, user),
    };
    let currentPurchases = storage.get("purchases");
    currentPurchases.push(order).write();
    return order;
  }
}
module.exports = Store;
