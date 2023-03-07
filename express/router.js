const express = require("express");
const router = express.Router();
const middleware = require("./middleware");

// Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on). In simple terms, Routing allows targeting different routes or different URLs on our page.

// sabhi route pe middleware apply karne ke liye ap iska use karte hai
router.use(middleware);

router.get("/",(req, res) => {
    // res.sendFile(`${pathdir}/inde.html`);
    console.log(req.query);
    res.render("inde", {
        title: "index"
    });
})

router.get("/home", (req, res) => {
    // res.sendFile(`${pathdir}/home.html`);
    res.render("home", {
        title: "home"
    });
})

router.get("/download", (req, res) => {
    // res.download(`${pathdir}/inde.html`);
        
})

module.exports = router; 