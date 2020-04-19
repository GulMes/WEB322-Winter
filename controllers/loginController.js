const express = require('express')
const router = express.Router();



//Login
router.get("/login", (req, res) => {
    res.render("login", {
        title: "Login"
    });

});

//Login form submission
router.post("/login", (req, res) => {
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


module.exports = router;