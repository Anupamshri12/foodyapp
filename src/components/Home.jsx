import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Card from "./Card";
import Cubes from "./Cubes";
import { useState } from "react";
import { useSelector } from "react-redux";
import { HashLink as Link } from 'react-router-hash-link';
import Special from "./Special";
export default function Home() {

  const[search ,setsearch] = useState("");
  const foodit = useSelector((state)=>{
    return state.carts.items1
  })
 
  const foodcat = useSelector((state)=>{
    return state.carts.items2
  })
  const handlechange = (e)=>{
        setsearch(e.target.value)
  }
 
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
      <div id="carouselExampleIndicators" class="carousel slide" style = {{objectFit:"contain !important"}}> 
  <div class="carousel-indicators" >
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner" id = "caraosel">
    <div class = "carousel-caption" style = {{zIndex:"10"}}>
    <div class="d-flex justify-content-center" >
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" value = {search} onChange={handlechange}/>
     
    </div>
    </div>
    <div class="carousel-item active">
      <img src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      </div>
      <Cubes/>
     <Special/>
      <div className="m-3">
        {foodcat.length != 0
          ? foodcat.map((data) => {
              return (
                <div className="row mb-3">
                  <div key={data._id} className="fs-3 m-3 padd"> {data.CategoryName}</div>
                 

                  {foodit.length != 0
                    ? foodit
                        .filter(
                          (item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLocaleLowerCase()))
                        )
                        .map((data1) => {
                          return (
                            <div key={data1._id} className="col-12 col-md-6 col-lg-3">
                              <Card foodname = {data1} options = {data1.options[0]}/>
                            </div>
                          );
                        })
                    : null}
                </div>
              );
            })
          : ""}
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
