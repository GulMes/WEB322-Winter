const express = require('express')
const router = express.Router();

//Show products
//load models
const productModel = require("../models/product");

router.get("/product", (req, res) => {
    res.render("product", {
        title: "Products",
        proData: productModel.getAllProduct()
    });
});


module.exports = router;