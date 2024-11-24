const jwtProvider=require("../config/jwtProvider")
const userService=require("../services/user.service")

const jwt = require('jsonwebtoken');

 const authenticate = async(req,res,next)=>{

    try {
        const authHeader = await req.headers.authorization;
        const token = authHeader && authHeader.split(' ')[1]; 

        console.log("token is in middleware " + token);
        if(!token){
            return res.status(404).send({message:"token not found"})
        }

        const userId=jwtProvider.getUserIdFromToken(token);
        const user=await userService.findUserById(userId);
        req.user=user
        console.log(req.user)
       
        next();
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
  
}

module.exports=authenticate;