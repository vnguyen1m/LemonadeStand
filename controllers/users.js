
var express = require("express");
var expressValidator = require('express-validator');
var router = express.Router();
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const verifyToken = require('../config/jwtAutho');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var passwordHash = require('password-hash');

var User = require("../models/users.js");
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

    // check if user email exit
    User.findOne(req.body.email, function (err, user) {

        console.log("am user ============>", user)
        if (user >= 1) {
            console.log(user)
            return res.status(409).json({
                message: "email exit, please try to login"
            });

        } else {
            bcrypt.hash(req.body.password, 10, function (err, hash) {
                if (err) {
                    return res.status(500).json({
                        error: err
                    });
                } else {
                    var newuser = {
                        lname: req.body.lname,
                        fname: req.body.fname,
                        email: req.body.email,
                        password: hash
                    }
                    console.log(newuser);
                    var cols = ['lname', 'fname', 'email', 'password'];
                    var vals = [newuser.lname, newuser.fname, newuser.email, newuser.password]
                    User.createUser(cols, vals,  function (err, result){
                        console.log(err)
                        console.log(result)
                        if(err){
                            console.log(err)
                        } else {
                            res.render("layouts/index")
                        }
                    })
                }
            })
        }
    })




    // var lname = req.body.lname;
    // var fname = req.body.fname;
    // var email = req.body.email;
    // var password = req.body.password;
    // var password2 = req.body.password2;


    // // validation
    // req.checkBody('lname', 'first name is required').notEmpty()
    // req.checkBody('fname', 'last name is required').notEmpty()
    // req.checkBody('email', 'email is not vaild').isEmail()
    // req.checkBody('password', 'password is required').notEmpty()
    // req.checkBody('password2', 'passwords do not match').equals(password)

    // // error handling 
    // var errors = req.validationErrors();
    // if (errors) {
    //     res.render('layouts/register', {
    //         errors: errors
    //     })
    // } else {

    //     bcrypt.hash(password, 10, (err, hash) => {
    //         if(err){
    //             return res.status(500).json({
    //                 error: err

    //             })
    //         } else{
    //             var newuser = {
    //                 username: username,
    //                 email: email,
    //                 password: hash
    //             }
    //             try({})
    //         }
    //     })




    //     console.log(newUser)
    //     var cols = ['lname', 'fname', 'email', 'passport'];
    //     var newUser ={lname, fname, email, passport}
    //     console.log("this is users arry", newUser);

    //     user.createUser( newUser,cols,  function (result) {
    //             // Send back the ID of the new quote
    //             console.log(result);
    //             res.render("layouts/index")
    //         });
    // }
});

// passport.use(new LocalStrategy(
//     function (username, password, done) {
//         user.getUserByUsername(username, function (err, user) {
//             if (err) throw err;
//             if (!user) {
//                 return done(null, false, { message: 'Unknown User' });
//             }

//             user.comparePassword(password, user.password, function (err, isMatch) {
//                 if (err) throw err;
//                 if (isMatch) {
//                     return done(null, user);
//                 } else {
//                     return done(null, false, { message: 'Invalid password' });
//                 }
//             });
//         });
//     }));

// passport.serializeUser(function (user, done) {
//     done(null, user.id);
// });

// passport.deserializeUser(function (id, done) {
//     user.getUserById(id, function (err, user) {
//         done(err, user);
//     });
// });

router.post('/login',
    passport.authenticate('local', { successRedirect: '/', failureRedirect: '/users/login', failureFlash: true }),
    function (req, res) {
        res.redirect('layouts/inex');
    });

router.get('/logout', function (req, res) {
    req.logout();

    req.flash('success_msg', 'You are logged out');

    res.redirect('/users/login');
});


router.post('/login', (req, res) => {
    console.log(req.body);
    const user = {
        userName: req.body.username,
        password: req.body.password
    }

    jwt.sign({ user }, 'secretkey', { expiresIn: '350' }, (err, token) => {
        console.log(user)
        res.json({
            token
        })
    })
})

router.post('/rigestir', verifyToken, (req, res) => {
    jwt.verify(req.token, 'secretKey', (err, authData) => {
        if (err) {
            res.sendStatus(403)
        } else {
            res.json({
                message: 'Post created ....'
            });
        }
    })
})

module.exports = router;

