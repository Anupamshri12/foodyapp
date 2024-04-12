const express = require("express")
const app = express()
const cors = require("cors");
const mongodb = require("./db");
const cookieparser = require("cookie-parser")
mongodb();
app.use(express.json());
app.use(cors());


 
app.use("/api",require("./Routes/CreateUser"))
app.use("/api" ,require("./Routes/Displaydata"))
app.use("/api" ,require("./Routes/OrderData"))
app.get("/login" ,(req , res)=>{
   res.send("Hello")
})

app.listen(5000 ,()=>{
    console.log("Server has been started")
})