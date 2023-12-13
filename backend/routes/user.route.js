const express=require("express")
const userRoute= express.Router()
const {postData,getData} =require("../controller/user.controller")




userRoute.post("/postData",postData)
userRoute.post("/getData",getData)

module.exports=userRoute