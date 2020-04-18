const express = require('express')
const router = express.Router();

//Customer registration
router.get("/Register", (req, res) => {
    res.render("register");
});


//Registration form submission
router.post("/Register", (req, res) => {
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


module.exports = router;