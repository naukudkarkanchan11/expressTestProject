"use strict";

const express = require("express");
const router = express.Router();

console.log("inside middleware file");
router.use(function(req, res, next){
    console.log("inside middleware");
    next();
});


module.exports = router;