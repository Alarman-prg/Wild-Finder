"use strict";
const express = require("express");
const path = require('path');
const app = express();

app.use(express.static("public"));

// npm install -g express
// does this install for the entire system and are the package.json files updated?
// is it recommended to include these in a readme for future devs

// app.get("/", function (req, res) {
//     res.send("Hi, from Express!");
// });

app.get("/", function(req, res) {
    res.sendFile('landing.html', {root: path.join(__dirname, '../01_nodepractice/public') })
});

app.get("/adminpanel", function(req, res) {
    res.sendFile('admin.html', {root: path.join(__dirname, '../01_nodepractice/public') })
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log('Example app listening on port: ' + PORT + "!");
});

app.get("/hello", function (req, res) {
    res.type("text");
    res.send("Hello from /hello! ");
});

app.get("/greeting", function (req, res) {
    res.set("Content-Type", "application/json");
    res.send({ "msg": "Hello, from greeeting!" });
});

app.get("/states/:state/cities/:city", function (req, res) {        // ASK ABOUT VARIABLES :EXAMPLE
    res.type("text");
    res.send("You sent a request for " + req.params.city + ", "
        + req.params.state);
});

app.get("/cityInfo", function (req, res) {
    let state = req.query.state;
    let city = req.query.city;
    // res.header("Access-Control-Allow-Origin", "*");   SOLUTION 1
    res.set("Content-Type", "application/json");
    res.send({ "state": state, "city": city });
});