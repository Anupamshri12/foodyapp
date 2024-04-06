const express = require("express");
const router = express.Router();
const User = require("../Models/Users")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const secretkey = "rhbviebivbie3434349jrf"
const {body ,validationResult} = require("express-validator")
router.post("/createuser" ,[
    body('email').isEmail(),
  body('name').isLength({min:5}),
  body('password' ,'Incorrect password').isLength({min:5})

],

async (req ,res )=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(404).json({errors:errors.array()})
    }
    const salt = await bcrypt.genSalt(10);
    const secpasssword = await bcrypt.hash(req.body.password ,salt)
     try{
        await User.create({
            name:req.body.name,
            password:secpasssword,
            email:req.body.email,
            location:req.body.location,

        })
       res.json({
        success:true
       })
     }
     catch(error){
        res.json({
            success:false
        })
     }
})

router.post("/loginuser" ,

async (req ,res )=>{
    let email = req.body.email
     try{
        let usermail =  await User.findOne({email})
         if(!usermail){
            return res.status(400).json({success:false})
         }
         const compassword = await bcrypt.compare(req.body.password ,usermail.password)
         if(!compassword){
            return res.status(400).json({success:false})
         }
         const data = {
            user:{
               id:usermail.id
            }
         }
         const authtoken = await jwt.sign(data , secretkey);
            return res.json({success:true ,authtoken:authtoken})
         
     }
     catch(error){
        console.log(error)
     }
})
module.exports = router