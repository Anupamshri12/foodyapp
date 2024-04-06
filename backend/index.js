const express = require("express")
const app = express()
const cors = require("cors")
const mongodb = require("./db");
mongodb();
app.use(express.json());

app.use((req ,res ,next)=>{
   res.setHeader("Access-Control-Allow-Origin" ,"http://localhost:3000")
   res.header(
    "Access-Control-Allow-Headers",
    "Origin ,X-Requested-With ,Content-Type ,Accept"
   )
   next()
})
const corsOptions = {
   origin: 'https://main--dulcet-travesseiro-ca849b.netlify.app',
 };
 app.use(cors(corsOptions));
app.use("/api",require("./Routes/CreateUser"))
app.use("/api" ,require("./Routes/Displaydata"))
app.use("/api" ,require("./Routes/OrderData"))
app.get("/login" ,(req , res)=>{
   res.send("Hello")
})

app.listen(5000 ,()=>{
    console.log("Server has been started")
})