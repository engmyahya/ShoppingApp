//An express APP
const express = require("express");
const bodyParser = require("body-parser");
const adminRoute = require("../src/routes/admin");
const shopRoute = require("../src/routes/shop");
//init
const app = express();
const port = 7080;

//middleware for parsing the req content and URL
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// manage routs middleware
app.use(adminRoute);
app.use(shopRoute);
app.listen(port, () => {
  console.log(`Connection established to the express server on port ${port}`);
});
