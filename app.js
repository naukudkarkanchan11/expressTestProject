"use strict";

const express = require("express");
let app = express();

let middleware = require('./middleware');
let userRoutes = require('./routes/user');
let adminRoutes = require('./routes/admin');

// app.get('/', function(req, res){
//    res.send(200);
// });
//middleware
app.use(middleware);
//user routes
app.use(userRoutes);
//admin routes
app.use('/admin', adminRoutes);

app.listen(3000, ()=>{
    console.log("Server is running on 3000");
});