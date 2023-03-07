
// Middleware
// Middleware gets executed after the server receives the request and before the controller actions send the response. Middleware has the access to the request object, responses object, and next, it can process the request before the server send a response. An Express-based application is a series of middleware function calls.
// req.quer is hame ye pta chalta hai kisne ka search kiya hai url pe.

 function agedetector(req,res,next){
    if(req.query.age > 18){
        // res.send("You are greater you can enter the website");
        next();
    }
    else{
        res.send("You can not access this website");
    }
}

module.exports = agedetector;
 