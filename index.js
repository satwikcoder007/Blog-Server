const express = require("express");
const app = express();
require("dotenv").config();
const dbConnector = require("./config/dbConnector");

const port=process.env.PORT || 4000;

app.use(express.json());

app.listen(port,()=>console.log(`server started at port ${port}`))
app.get("/",(req,res)=>{
    res.send("SERVER");
})
dbConnector();