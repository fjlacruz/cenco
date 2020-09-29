
"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const products = [
  { code: 'BT', name: 'blue t-shit', price: 100, discount: 20 },
  { code: 'RT', name: 'red t-shit', price: 100, discount: 0 },
  { code: 'BJX', name: 'blue jeans X', price: 100, discount: 5 },
  { code: 'BJY', name: 'blue jeans Y', price: 100, discount: 30 },
  { code: 'BJZ', name: 'blue jeans Z', price: 100, discount: 0 },
];


class productservice {
  constructor() { }

  getAllProduct(req, res) {
    res.status(200).json({ productos: products });
  }

  getProductByCode(req, res) {
    let code = req.params.code;
    const result = products.find((product) => product.code == req.params.code);
    res.status(200).json({ producto: result });
  }

  getProductsCheckout(req, res) {

    const cantProd = products.length;

    let total = 0;
    products.forEach(function (product) {
      total += product.price;
    });


    let totalDiscount = 0;
    products.forEach(function (product) {
      totalDiscount += product.discount;
    });

    let totalToPay = 0;
    totalToPay = total - totalDiscount;

    res.status(200)
      .json({
        total: total,
        totalDiscount: totalDiscount,
        totalToPay: totalToPay, products
      });
  }
}

module.exports = productservice;