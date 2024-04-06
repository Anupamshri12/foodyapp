import React from "react";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState } from "react";
export default function MyOrder() {
  const [orderData, setorderdata] = useState([]);
  console.log(localStorage.getItem("userEmail"));

  const fetchdata = async () => {
    const response = await fetch("http://localhost:5000/api/myorderdata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: localStorage.getItem("userEmail") }),
    }).then(async (res) => {
      const resp = await res.json();
      setorderdata(resp);
    }).catch((err)=>{
      console.log(err)
    })
  };
 
  useEffect(() => {
    fetchdata();
  }, []);
  return (
   
    <div>
      <Navbar />
      <div className="container mt-5">
        
        <h2 className="text-center">Your Orders</h2>
        <hr></hr>
        <div className="row mt-6" style={{background:"#effbef"}}>
          {
          orderData&&
            orderData.order_data&&
            orderData.order_data.order_data &&
            orderData.order_data.order_data.map((data, index) => {
              return (
                <div key={index} className="col-md-6 mb-4 mt-4">
                  {data &&
                    data.map((item, idx) => {
                      return (
                        <div key={idx} className="card" style = {{width:"30rem"}}>
                          {item.Order_date ? (
                            <div className="card-body">
                              <h5 className="card-title">Order Date</h5>
                              <p className="card-text">{item.Order_date}</p>
                            </div>
                          ) : (
                            <div className="card-body">
                              <h5 className="card-title">{item.name}</h5>
                              <p className="card-text">Price: {item.price}</p>
                              <p className="card-text">Quantity: {item.qty}</p>
                              <p className="card-text">Size: {item.sizet}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                </div>
              );
            })}
         
        </div>
      </div>
      <div><Footer /></div>
      
    </div>  );
}
