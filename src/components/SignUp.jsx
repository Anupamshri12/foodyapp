import React, { useState } from 'react'
import { Link } from 'react-router-dom'
export default function SignUp() {
    const [credentials ,setcredentials] = useState({name:"" ,email:"" ,password:"" ,location:""});
    const handleme = async(e)=>{
           e.preventDefault();
          //  console.log(JSON.stringify({name:credentials.name ,email:credentials.email ,password:credentials.password ,location:credentials.location}))
           const response = await fetch("http://localhost:5000/api/createuser" ,{
            method:"POST",
            headers:{
                'Content-Type':"application/json"
            },
            body:JSON.stringify({name:credentials.name ,email:credentials.email ,password:credentials.password ,location:credentials.location})
           })
           const json1 = await response.json();
           if(!json1.success){
            alert("Invalid Credentials")
           }
           else{
            alert("Account Created")
           }
    }
    const handleChange = (e)=>{
       setcredentials({...credentials ,[e.target.name]:e.target.value})
    }
  return (
    <div className="container" style ={{border:"2px solid green" ,borderRadius:"20px" ,marginTop:"6rem"}}>
    <h2 className="mb-4" style={{textAlign:"center"}}>CREATE YOUR ACCOUNT</h2>
    <form onSubmit={handleme}>
        <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" name="name" value={credentials.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">E-Mail</label>
            <input type="email" className="form-control" id="email" name="email" value={credentials.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" name="password" value={credentials.password} onChange={handleChange} required />
        </div>
        <div className="mb-3">
            <label htmlFor="location" className="form-label">Location</label>
            <input type="text" className="form-control" id="location" name="location" value={credentials.location} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-success">Submit</button>
    </form>
    <p className="mt-3">Already have an account? <Link to="/login" className="text-danger">Login here</Link></p>
</div>

  )
}

