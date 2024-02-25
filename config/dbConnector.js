const mongoose = require("mongoose");
require("dotenv").config();

const dbConnector = ()=>{
    mongoose 
        .connect(process.env.DB_URL)
        .then(()=>(console.log("MOngo Connected")))
        .catch((error)=>(console.log(error.message)));
}

module.exports = dbConnector;