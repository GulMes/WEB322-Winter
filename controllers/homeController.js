const express = require('express')
const router = express.Router();

//Home route
//load models
const promotionModel = require("../models/promotion");
const categoryModel = require("../models/category");
const bestSellerModel = require("../models/bestSeller");

router.get("/", (req, res) => {
    res.render("home", {
        title: "Home",
        promotions: promotionModel.getAllPromotions(),
        categories: categoryModel.getAllCategories(),
        bestSellers: bestSellerModel.getAllBestSell()
    });
});

module.exports = router;
