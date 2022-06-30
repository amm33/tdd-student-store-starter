// YOUR CODE HERE
const express = require("express"); // look inside node modules dir and store express in here
const morgan = require("morgan"); // morgan is just a logger, so allows us to log in app
const cors = require("cors"); // for hopscotch, etc. to see post
const router = require("./routes/store");

const app = express(); // creates new instance of exp app, and store in app
const { storage } = require("./data/storage");

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

app.get("/store", (req, res) => {
  res.send(storage.get("products").value()); //getting the data from storage
});

//----------------------------
app.get("/", (req, res, next) => {
  res.status(200).json({ ping: "pong" });
});

app.use("/store", router);
//----------------------------

module.exports = app;
