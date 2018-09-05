const express = require("express");
const app = express();
const art_template = require("express-art-template");
app.engine("art", art_template);
app.set("view options", {
    debug: process.env.NODE_NEV = "production"
})
app.get("/", function (req, res) {
    res.send("Hello");
})
app.get("/:a", function (req, res) {
    res.render("index.art");
})
app.listen(8080);