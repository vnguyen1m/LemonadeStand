
var express = require("express");
var expressValidator = require('express-validator');
var router = express.Router();
var bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
const verifyToken = require('../config/jwtAutho');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var passwordHash = require('password-hash');

var users = require("../models/users.js");
var table = "user"

// get registerstion form
router.get("/register", function (req, res) {
    console.log("hello new user", req.method)
    res.render('layouts/register')
})

// Login
router.get('/login', function (req, res) {
    console.log("this is login page ")
    res.render('layouts/login');
});

// post registerstion new user
router.post("/register", function (req, res, next) {

    var lname = req.body.lname;
    var fname = req.body.fname;
    var email = req.body.email;
    var password = req.body.password;
    var password2 = req.body.password2;


    // validation
    req.checkBody('lname', 'first name is required').notEmpty()
    req.checkBody('fname', 'last name is required').notEmpty()
    req.checkBody('email', 'email is not vaild').isEmail()
    req.checkBody('password', 'password is required').notEmpty()
    req.checkBody('password2', 'passwords do not match').equals(password)

    // error handling 
    var errors = req.validationErrors();
    if (errors) {
        res.render('layouts/register', {
            errors: errors
        })
    } else {

        var hashedPassword = passwordHash.generate(password);
        console.log("this is new user ===>", hashedPassword)
        users.createUser(
            ["lname", "fname", "email", "pass"],
            [lname, fname, email, hashedPassword],
            function (result) {
                // Send back the ID of the new quote
                console.log(result);
                res.render("index")
            });
    }
});
passport.use(new LocalStrategy(function (username, password, done) {
    console.log("this is user name ==", username)
    users.getUserByEmail(table, username, function (err, user) {
        console.log("getuserByEmail funcaiton ===>", user)
        if (err) throw console.error("am the error ", err)
        if (!user) {

            return done(null, false, { message: 'no user found' })
        }

        console.log("this is user before comparing password", user);

        users.comparePassword(hashedPassword, user.pass, function (err, isMatch) {
            if (err) throw err
            if (isMatch) {
                return done(null, user)
            } else {
                return done(null, false, { message: "invild password" })
            }
        })


    });


}
));

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    users.getUserById(id, function (err, user) {
        done(err, user);
    });
});

router.post('/login',
    passport.authenticate('local', { successRedirect: '/', failureRedirect: '/users/login', failureFlash: true }),
    function (req, res) {
        console.log("user name ", req.user.username)
        res.redirect('/main/' + req.user.username);
    });

router.get('/logout', function (req, res) {
    req.logout();
    req.flash('success_msg', "You have logged out")
    res.redirect("layouts/login")
})
module.exports = router;

