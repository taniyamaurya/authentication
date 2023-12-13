const mongoose = require("mongoose")
require("dotenv").config()

const connect=async()=>{
    try {
       mongoose.connect(process.env.DB_URL)
       console.log('Database connected'); 
    } catch (error) {
        console.log(error.message);
    }
}

module.exports=connect