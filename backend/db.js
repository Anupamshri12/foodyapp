const mongoose = require("mongoose");
const mongodb = async () =>{
    try{
        await mongoose.connect("mongodb+srv://gofood:Anupam123@cluster0.ubemdpt.mongodb.net/gofoodbackend?retryWrites=true&w=majority" )
      console.log("Connected succesfully");
     
      
      
     }
     catch{
        console.log("This is error")
     }
   

    
};
module.exports = mongodb;