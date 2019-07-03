"use strict";

const express = require("express");
const adminRouter = express.Router();

let adminController = require('../controllers/adminInfo');
console.log("inside admin routes");
//middleware
// adminRouter.use(function(req, res, next){
//     console.log("inside admin middleware");
//     next();
// });

adminRouter.get('/', function(req, res){
    console.log("Hello admin.......");
    adminController.adminInfo();
    res.send("Hello admin");   
});


module.exports = adminRouter;