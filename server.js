const express = require("express");
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');


//load the environment variable file
require('dotenv').config({path:"./config/keys.env"});

const app = express();

//Handlebars middleware 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));

//load controllers
const homeController = require("./controllers/homeController");
const loginController = require("./controllers/loginController");
const productController = require("./controllers/productController");
const registerController = require("./controllers/registerController");

//map each controller to the app object
app.use("/",homeController);
app.use("/Login",loginController);
app.use("/Product",productController);
app.use("/Register",registerController);

//Set up server
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Web Server is running`);
});