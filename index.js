const express = require("express");
const bodyParser = require("body-parser");
const callService = require("./product-service");
var call = new callService();

const app = express();
app.use(bodyParser.json());
//obtiene listado de productos
app.get("/product", (req, res) => {
  call.getAllProduct(req, res);
});
//obtiene productos por codigo
app.get("/product/:code", (req, res) => {
  call.getProductByCode(req, res);
});

//Need to calculate total and discount
app.get("/checkout", (req, res) => {
  call.getProductsCheckout(req, res);
});

app.listen(3000);
console.log("Express started on port 3000");
