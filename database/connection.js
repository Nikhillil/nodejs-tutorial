
const mongoose = require("mongoose");

// connect server to mongodb localhost 
mongoose.connect('mongodb://127.0.0.1:27017/nodejstutorial').then(() => {
    console.log("connection succesfully");
}).catch((err) => {
    console.log(err);
})

// make schema 
const schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    confpassword:{
        type:String,
        required:true
    }
})

// make a model (collection)
const user = mongoose.model("user", schema);

module.exports = user;