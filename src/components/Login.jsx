import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function Login() {
  const navigate = useNavigate();
  const [credentials ,setcredentials] = useState({email:"" ,password:""});
    const handleme = async(e)=>{
           e.preventDefault();
          //  console.log(JSON.stringify({name:credentials.name ,email:credentials.email ,password:credentials.password ,location:credentials.location}))
           const response = await fetch("https://backendonly.onrender.com/api/loginuser" ,{
            method:"POST",
            headers:{
                'Content-Type':"application/json"
            },
            body:JSON.stringify({email:credentials.email ,password:credentials.password })
           })
           const json = await response.json();
           if(!json.success){
             alert("Wrong credentials")
           }
           else{
            localStorage.setItem("userEmail" ,credentials.email)
            localStorage.setItem("authToken" ,json.authtoken)
            
            alert("Successfully logged in")
            navigate("/");
           }
          
    }
    const onchange = async(e)=>{
       await setcredentials({...credentials ,[e.target.name]:e.target.value})  
    }
  return (
    
      <div className="container mt-5">
              <div className="row justify-content-center">
                  <div className="col-md-6">
                      <div className="card" style={{width:"100%"}}>
                          <div className="card-header bg-success text-white">
                              <h3 className="mb-0">Enter Your Credentials</h3>
                          </div>
                          <div className="card-body">
                              <form onSubmit={handleme}>
                                  <div className="mb-3">
                                      <label htmlFor="email" className="form-label">Email address</label>
                                      <input type="email" className="form-control" id="email" placeholder="Enter email" name = "email" value={credentials.email} onChange={onchange} required />
                                  </div>
                                  <div className="mb-3">
                                      <label htmlFor="password" className="form-label">Password</label>
                                      <input type="password" className="form-control" id="password" placeholder="Password" name = "password" value={credentials.password} onChange={onchange} required />
                                  </div>
                                  <button type="submit" className="btn btn-success w-100">Login</button>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
  )
}
