"use strict";

const express = require("express");
const userRouter = express.Router();

let userController = require('../controllers/userInfo');
console.log("inside user routes");
//middleware
// userRouter.use(function(req, res, next){
//     console.log("inside user middleware");
//     next();
// });

userRouter.get('/', function(req, res){
    console.log("Hello user.......");
    userController.userInfo();
    res.send("Hello user");   
});


module.exports = userRouter;