const http = require("http");

const server = http.createServer((req, res) => {
    if(req.url === "/"){
       res.end("hi this is my first node js server");
    } 
    else if(req.url === "/download"){
        res.end("hi this is my first download page");
    }
    else if(req.url === "/about"){
        res.end("hi this is my first about page");
    }
    else{
        res.end("404: page could not be found");
    }
})

server.listen(3000, () => {
    console.log("server is working on port", 3000);
})