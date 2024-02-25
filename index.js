const express = require("express");
const app = express();
require("dotenv").config();
const dbConnector = require("./config/dbConnector");

const port=process.env.PORT || 4000;

app.use(express.json());

const routes = require("./routes/BlogRoutes");
app.use('/api/v1',routes);

app.listen(port,()=>console.log(`server started at port ${port}`))
app.get("/",(req,res)=>{
    res.send("SERVER");
})
dbConnector();