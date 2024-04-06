import React from 'react'
import './Special.css'
export default function Special() {
  return (
    <div className='container' >
   <h3 style = {{textAlign:"center" , marginTop:"4rem"}}>INSPIRATION FOR YOUR FIRST ORDER</h3>
     <div className='container' id = "special">
      <div className='image-box'>
      <img alt="..." src="https://img.freepik.com/free-vector/colorful-round-tasty-pizza_1284-10219.jpg?size=626&ext=jpg" style = {{height:"120px", width:"120px" ,marginTop:".8rem"}}></img>
      <h5>Pizza</h5>
      </div>
  
        <div className='image-box'>
    <img src = "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png" alt = "..." style = {{height:"100px", width:"100px" ,marginTop:".8rem"}}></img>
    <h5>Biryani</h5>
      </div>
   
        <div className='image-box'>
    <img src = "https://b.zmtcdn.com/data/dish_images/e44c42ff4b60b025225c8691ef9735b11635781903.png" alt = "..." style = {{height:"100px", width:"100px" ,marginTop:".8rem"}}></img>
    <h5>Panner</h5>
      </div>
      <div className='image-box'>
    <img alt="image" src="https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png" style = {{height:"100px", width:"100px" ,marginTop:".8rem"}}/>
    <h5>Paratha</h5>
      </div>
      <div className='image-box'>
    <img alt="image" src="https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png" style = {{height:"100px", width:"100px" ,marginTop:".8rem"}}></img>
    <h5>Rolls</h5>
      </div>
      <div className='image-box'>
    <img alt="image" src="https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png" style = {{height:"100px", width:"100px" ,marginTop:".8rem"}}></img>
    <h5>Burger</h5>
      </div>
    </div>
    </div>
  )
}
