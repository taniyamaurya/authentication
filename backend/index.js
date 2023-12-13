const express = require("express")
const app= express()
const connect=require("./config/config")
const cors=require("cors")
const userRoute = require("./routes/user.route")
require("dotenv").config()


app.use(express.json())
app.use(cors())
app.use("/",userRoute)


app.listen(process.env.PORT,async()=>{
    try {
        await connect()
    } catch (error) {
        console.log(error.message);
    }
    console.log(`Server connected ${process.env.PORT}`);
})
