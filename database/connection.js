
const mongoose = require("mongoose");

// connect server to mongodb localhost 
mongoose.connect('mongodb://127.0.0.1:27017/nodejstutorial').then(() => {
    console.log("connection succesfully");
}).catch((err) => {
    console.log(err);
})

// make schema 
const schema = new mongoose.Schema({
    name: String,
})

// make a model (collection)
const user = mongoose.model("user", schema);

module.exports = user;