const express = require("express");
const { products } = require("../data/products");
const helper = require("../Util/helpers");
//const an app route
const route = express.Router();

//get product(s).
route
  .get("/products", (req, res) => {
    res.json(products);
  })
  .get("/products/:id", (req, res) => {
    const id = req.params?.id ? parseInt(req.params.id) : 0;
    const product = helper.getProdById(products, id);
    res.status(200).json({ Product: product });
  });
module.exports = route;
