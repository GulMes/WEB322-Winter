const express = require("express");
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

require('dotenv').config({path:"./config/keys.env"});

const app = express();

//Handlebars middleware (This tells Express to set handlebars as the template engine)
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));


//Home route
const promotionModel = require("./models/promotion");
const categoryModel = require("./models/category");
const bestSellerModel = require("./models/bestSeller");
app.get("/", (req, res) => {
    res.render("home", {
        title: "Home",
        promotions: promotionModel.getAllPromotions(),
        categories: categoryModel.getAllCategories(),
        bestSellers: bestSellerModel.getAllBestSell()
    });
});

//Show products
const productModel = require("./models/product");
app.get("/Product", (req, res) => {
    res.render("product", {
        title: "Products",
        proData: productModel.getAllProduct()
    });
});

//Customer registration
app.get("/Register", (req, res) => {
    res.render("register");
});


//Registration form submission
app.post("/Register", (req, res) => {
    const errors = [];

    if (req.body.name == "") {
        errors.push("Enter your name");
    }
    if (req.body.email == "") {
        errors.push("Enter your email");
    }
    if (req.body.password == "") {
        errors.push("Enter your password");
    }

    if (errors.length > 0) {
        res.render("register", {
            errorMsg: errors
        });
    }
    else {

        const {name, email, password} = req.body;

        const sgMail = require('@sendgrid/mail');
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        const msg = {
            to: `gmesrefoglu@myseneca.ca`,
            from: `${email}`,
            subject: 'Registration Form',
            html: `Full Name ${name} <br>
                   Email Address ${email} <br>
                   Password ${password} <br>`,
        };
        sgMail.send(msg)
        .then(()=>{
            res.redirect("/");
        })
        .catch(err=>{
            console.log(`Error ${err}`);
        })

    }
});

//Login
app.get("/Login", (req, res) => {
    res.render("login");
});

//Login form submission
app.post("/Login", (req, res) => {
    const errors = [];

    if (req.body.email == "") {
        errors.push("Enter your email");
    }
    if (req.body.password == "") {
        errors.push("Enter your password");
    }

    if (errors.length > 0) {
        res.render("login", {
            errorMsg: errors
        });
    }
    else {
        const { name } = req.body;
        res.render("home", {
            successMsg: `Welcome ${name}.`
        });
    }
   
});





//Set up server
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Web Server is running`);
});