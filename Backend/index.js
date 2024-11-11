const port =4000;
const express =require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path =require("path");
const cors =require("cors");

app.use(express.json());//resive the response 
app.use(cors());//project connect to port
// data base connection
mongoose.connect("mongodb+srv://navinv:9788665770@cluster0.27dbj.mongodb.net/");
  
app.get("/",(req,res)=>{
    res.send("Express server is running hooya ")

})

app.listen(port,(error)=>{
    if(!error)
    {
        console.log("Server is running on the port "+port);
    }
    else{
        console.log("Error:"+error);
    }
})