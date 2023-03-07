const express = require("express");
const app = express();
const path = require("path");
const router = require("./router");

// const pathdir = path.join(__dirname, "public");
// app.use(express.static(pathdir));

app.set("view engine", "ejs");

app.use(router);

app.listen(3000, () => {
    console.log("express js server is working on port", 3000);
})