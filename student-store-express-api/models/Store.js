const { storage } = require("../data/storage");

class Store {
  static getProductsWithId(id) {
    const prod = storage
      .get("products")
      .value()
      // .find({ id: Number(id) });
      .find((elem) => elem.id === id);
    return prod;
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
