import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import trash from './trash.svg'
import { removecart } from '../feautres/Slice';
import {dropy} from '../feautres/Slice'
export default function Cart(){
  const food = useSelector((state)=>{
    return state.carts.cart
  })
  console.log(typeof(food))
  const dispatch = useDispatch();
  const handleCheckOut = async () => {
    let userEmail = localStorage.getItem("userEmail");
    // console.log(data,localStorage.getItem("userEmail"),new Date())
    let response = await fetch("https://backendonly.onrender.com/api/orderData", {
      // credentials: 'include',
      // Origin:"http://localhost:3000/login",
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        order_data: food,
        email: userEmail,
        Order_date: new Date().toDateString()
      })
    });
   
  
    if(response.status == 200){
    console.log(food)
       await dispatch(dropy())
    }
    
  }
  let totalPrice = food.reduce((total, food1) => total + food1.price, 0)
  return (
    <div>
      {
        food.length == 0?
        <h2 style={{textAlign:"center"}}>Your Cart is Empty!</h2>:
      
      <div className='container m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md' >
        <table className='table table-hover '>
          <thead className=' text-success fs-4'>
            <tr>
              <th scope='col' >#</th>
              <th scope='col' >Name</th>
              <th scope='col' >Quantity</th>
              <th scope='col' >Option</th>
              <th scope='col' >Amount</th>
              <th scope='col' ></th>
            </tr>
          </thead>
          <tbody>
            {food.map((food, index) => (
              <tr>
                <th scope='row' >{index + 1}</th>
                <td >{food.name}</td>
                <td>{food.qty}</td>
                <td>{food.sizet}</td>
                <td>{food.price}</td>
           <td><img src = {trash} alt='...' onClick={()=>dispatch(removecart(food))} style={{cursor:"pointer"}}></img></td> </tr>
            ))}
          </tbody>
        </table>
        <div><h1 className='fs-2'>Total Price: <span>{totalPrice}</span></h1></div>
        <div>
          <button className='btn bg-success mt-5 ' onClick={handleCheckOut}> Check Out </button>
        </div>
      </div>


            }
    </div>
  )};

