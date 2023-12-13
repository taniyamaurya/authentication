const userModel=require("../models/user.model")

//register
const postData=async(req,res)=>{
    try {
        const {name,email,password}=req.body
         const userObj= await userModel({
            name,
            email,
            password
         })
         await userObj.save()

    return res.status(200).send({success:true, message:userObj})
    } catch (error) {
        return res.status(200).send({success:false,message:`Internal server error ${error.message}`})
        // console.log(error.message);

    }
}


//login
const getData=async(req,res)=>{
    try {
        // const userData= await userModel.find()
        const {email,password}=req.body
        const user=await userModel.findOne({email:email})

        if (!user){
            return res.status(201).send({message:"User is not registered"})
        }

        if(user.password===password){
            return res.status(200).send({message:"Login"})
        }
        else{
            return res.status(200).send({message:"Wrong password"})
        }


        // console.log("Correct",user);
        // return res.status(200).send({success:true, message:"Data sent successfully"})
    } catch (error) {
        return res.status(200).send({success:false,message:`Internal server error ${error.message}`})
    }   
}
module.exports={postData,getData}