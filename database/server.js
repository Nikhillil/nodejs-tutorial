const express = require("express");
const app = express();
const user = require("./connection");

// crud operation
// post, get, put, delete
// post --> data send to database
// get --> get the data from database
// put --> uptade the data in database 
// delete --> delete the data from database

app.use(express.json());

//1. post --> data send to database
app.post("/", async (req, res) => {
    try {
        const senddata = new user(req.body);
        const savedata = await senddata.save();
        res.send(savedata);
    } catch (error) {
        res.status(404).send(error);
    }
})

//2. get --> get the data from database
app.get("/user", async(req, res) => {
    try {
        const getdata = await user.find({name: "code sikhoo mje sei"});
        res.send(getdata);
    } catch (error) {
        res.status(404).send(error);
    }
})

//3. get particular single data with the help of id
app.get("/user/:id", async(req, res) => {
    try {
        // req.paramas.id ki help se ap id nikal sakte hai url se  
        const id = req.params.id; 
        const getiddata = await user.findById({_id: id})
        res.send(getiddata);
    } catch (error) {
        res.status(404).send(error);
    }
})

//4. put --> uptade the data in database 
app.put("/update/:id", async(req, res) => {
    try {
        const id = req.params.id;
        const updatedata = await user.findByIdAndUpdate({_id:id}, req.body, {new:true});
        res.send(updatedata);
    } catch (error) {
        res.status(500).send(error);
    }
})

//5. delete --> delete the data from database
app.delete("/delete/:id", async(req, res) => {
    try {
        const id = req.params.id;
        const deletedata = await user.findByIdAndDelete({_id: id});
        res.send(deletedata);
    } catch (error) {
        res.status(500).send(error);
    }
})

app.listen(3000, () => {
    console.log("server succesfully created");
})