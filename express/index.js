const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("hi this is first express js route");
})

app.get("/about", (req, res) => {
    res.send("hi this is about page");
})

app.get("/download", (req, res) => {
    res.send("download file");
})

app.listen(3000, () => {
    console.log("express js server is working on port", 3000);
})