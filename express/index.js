const express = require("express");
const app = express();
const path = require("path");

const pathdir = path.join(__dirname, "public");

app.use(express.static(pathdir));

app.get("/", (req, res) => {
    res.sendFile(`${pathdir}/inde.html`);
})

app.get("/about", (req, res) => {
    res.sendFile(`${pathdir}/home.html`);
})

app.get("/download", (req, res) => {
    res.download(`${pathdir}/inde.html`);
        
})

app.listen(3000, () => {
    console.log("express js server is working on port", 3000);
})