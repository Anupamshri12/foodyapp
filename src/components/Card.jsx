import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addtocart } from '../feautres/Slice';
import { useState } from 'react';
import { useRef } from 'react';
import './Card.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Card(props) {
  let options = props.options;
  let priceoptions = Object.keys(options);

  let priceref = useRef();
  const dispatch = useDispatch();
  const[qty , setqty] = useState(1);
  const[sizet ,setsize] = useState(priceoptions[0]);
 
 const handlecart = async ()=>{
  const tokenid = localStorage.getItem("authToken");
  if(tokenid !== null){
    await dispatch(addtocart({price:finalPrice,id:props.foodname.id,img:props.foodname.img ,sizet:sizet,name:props.foodname.name ,qty:qty ,description:props.foodname.description}))
    toast.success('ITEM ADDED TO CART ', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      
      });
      
    
  }
  else{
    alert("Please Login to proceed")
  }
  
 }
   const finalPrice = qty*parseInt(options[sizet]);
useEffect(()=>{
  setsize(priceref.current.value)
},[])
  
 
  return (
    <div>
    <div class="card mt-3">
      <img src={props.foodname.img} class="card-img-top" alt="..." style = {{height:"150px", objectFit:"fill" }}/>
      <div class="card-body">
        <h5 class="card-title">{props.foodname.name}</h5>
        <div className="container w-100">
          <select className="m-2 h-100  bg-success rounded" onChange={(e)=>setqty(e.target.value)}>
            {Array.from(Array(6) ,(e ,i)=>{
              return (
                <option key = {i+1} value = {i+1}>{i+1}</option>
              )
            })}
          </select>
          <select className="m-2 h-100  bg-success rounded" ref = {priceref}onChange={(e)=>setsize(e.target.value)}>
           {
            priceoptions.map((data)=>{
              return(
                <option key = {data} value = {data}>{data}</option>
              )
            })
           }
          </select>
          <div className="d-inline h-100 fs-7">Rs.{finalPrice}/-</div>
        </div>
        <hr>
        </hr>
        <button className="btn btn-success justify-center ms-2" onClick = {handlecart}>Add to Cart</button>
        <ToastContainer
position="bottom-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
      </div>
    </div>
  </div>
  )
}
