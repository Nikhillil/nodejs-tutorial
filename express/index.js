const express = require("express");
const app = express();
const path = require("path");

// const pathdir = path.join(__dirname, "public");
// app.use(express.static(pathdir));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    // res.sendFile(`${pathdir}/inde.html`);
    res.render("inde", {
        title: "index"
    });
})

app.get("/home", (req, res) => {
    // res.sendFile(`${pathdir}/home.html`);
    res.render("home", {
        title: "home"
    });
})

app.get("/download", (req, res) => {
    // res.download(`${pathdir}/inde.html`);
        
})

app.listen(3000, () => {
    console.log("express js server is working on port", 3000);
})