const express = require('express');
const connect = require('./db');
const userModel = require('./schema');

const jwt = require("jsonwebtoken");
const auth = require('./auth');

const app = express();

app.use(express.json())

app.post("/signup", async(req,res)=> {
    let data = await userModel.create(req.body)
    res.send(data) 
})

app.post("/login", async(req,res)=> {

    let {email, password} = req.body

    let data = await userModel.findOne({email : email, password : password})

    if(data){
        let token = jwt.sign({name: "Yash"},"yash")
        console.log(token);
        res.send(token)
    }
    else{
        res.status(400).send("user not found")
    }
})

app.post("/private",auth, async(req,res)=>{
    let data = await userModel.create(req.body)
    res.send(data)
})

app.listen(8090,()=>{
    connect()
    console.log("listening on port 8090");
})