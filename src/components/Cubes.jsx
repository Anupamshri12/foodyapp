import React from 'react'
import './Cubes.css'
export default function Cubes() {
  return (
   <>
   <h3 style = {{textAlign:"center" , marginTop:"3rem"}}>OUR SERVICES</h3>
    <div  id= "cubes">
        
               <div class="card mt-3 newcards">
               <img src = "https://static.vecteezy.com/system/resources/previews/015/412/579/original/online-food-ordering-from-supermarket-using-mobile-app-smartphone-screen-with-order-button-and-store-cart-full-of-products-online-store-concept-for-infographics-web-design-illustration-vector.jpg" alt = "..." style = {{height:"50px", width:"50px" ,marginTop:".8rem"}}></img>
      <div class="card-body" style={{textAlign:"center"}}>
        <h5 class="card-title">Easy to order</h5>
        <div className="container w-100">
          <p>Select, customize and enjoy your favourite dishes with just a few taps. Simplify your mealtime experience. Enjoy Your Meal!</p>
        </div>
      </div>
    </div>
    <div class="card mt-3 newcards">
    <img src = "https://i.pinimg.com/originals/e8/03/16/e80316d006e91ff02f3b49e61a0051c0.png" alt = "..." style = {{height:"50px", width:"50px" ,marginTop:".8rem"}}></img>

      <div class="card-body"  style={{textAlign:"center"}}>
        <h5 class="card-title">Fastest Delivery</h5>
        <div className="container w-100">
          <p>Our dedicated delivery team ensures your order reaches your propomtly. So you can indulge you meals without delay.</p>
        </div>
      </div>
    </div>
    <div class="card mt-3 newcards">
    <img src = "https://cdn3.vectorstock.com/i/1000x1000/51/72/achievement-badge-vector-19145172.jpg" alt = "..." style = {{height:"50px", width:"50px" ,marginTop:".8rem"}}></img>

      <div class="card-body"  style={{textAlign:"center"}}>
        <h5 class="card-title">Best Quality</h5>
        <div className="container w-100">
          <p>Each dish is crafted with care, using the fresh ingredients and authentic recipies to gurantee a memorable dining experience.</p>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}
