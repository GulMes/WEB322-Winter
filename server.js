const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');


//load the environment variables from the keys.env
require('dotenv').config({path:"./config/keys.env"});

//import router objects
const homeRoutes = require("./controllers/homeController");
const loginRoutes = require("./controllers/loginController");
const productRoutes = require("./controllers/productController");
const registerRoutes = require("./controllers/registerController");

//creation of app object
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//express static middleware
app.use(express.static('public'));

//Handlebars middleware 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//map Express to all router objects
app.use("/",homeRoutes);
app.use("/login",loginRoutes);
app.use("/product",productRoutes);
app.use("/register",registerRoutes);


mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log(`Connected to MongoDB Database`);
})
.catch(err=>console.log(`Error occured when connecting to database ${err}`));


//Set up server
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Web Server is running`);
});