const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const employee = require("./models/employee")

const app = express()
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Add")
})

app.post("/search",(req,res)=>{
    res.send("Search")
})

app.post("/delete",(req,res)=>{
    res.send("delete")
})

app.post("/viewall",(req,res)=>{
    res.send("viewall")
})

app.listen(8080,()=>{
    console.log("Server started")
})