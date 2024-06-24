//import data
const { products } = require("../data/products");
//import validation.
const helpers = require("../Util/helpers");
const express = require("express");
const router = express.Router();

//admin routes for posting a product.
router.post("/products", (req, res) => {
  const prodId = req.body?.id ? parseInt(req.body.id) : 0;
  const prodName = req.body?.name ? req.body.name : "";
  const newProd = {
    id: prodId,
    name: prodName,
  };
  if (!helpers.IsExist(products, newProd)) {
    products.push(newProd);
  }
  res.status(302).redirect("/products");
});
module.exports = router;
