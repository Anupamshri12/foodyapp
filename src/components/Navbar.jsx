import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Badge } from "react-bootstrap";
import Modal from "./Modal";
import Cart from "./Cart";
export default function Navbar() {
  const navigate = useNavigate();
  const logouthandle = () => {
    localStorage.removeItem("authToken");
    alert("Logout successfully");
    navigate("/");
  };
  const[cartview ,setcartview] = useState(false);
  const products = useSelector((state) => {
    return state.carts.cart;
  });
  return (
    <nav class="navbar navbar-expand-lg " >
      <div class="container-fluid">
        <img
          src="https://static.vecteezy.com/system/resources/previews/013/342/395/original/food-delivery-logo-design-fast-delivery-service-sign-free-vector.jpg"
          alt="..."
          style={{ height: "90px", width: "90px" }}
        ></img>
        <Link class="navbar-brand fs-1 fst-italic" to="#">
          CraVECruiSE
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto mb-1">
            <li class="nav-item">
              <Link
                class="nav-link fs-4 active mt-2 mx-4 text-success"
                aria-current="page"
                to="/"
                style={{ fontWeight: "700", fontFamily: "revert-layer" }}
              >
                Home
              </Link>
            </li>

            {localStorage.getItem("authToken") ? (
              <li class="nav-item">
                <Link
                  class="nav-link fs-4 active mt-2 mx-4 text-success"
                  aria-current="page"
                  to="/myorders"
                  style={{ fontWeight: "700", fontFamily: "revert-layer" }}
                >
                  My Orders
                </Link>
              </li>
            ) : (
              ""
            )}
          </ul>
          {!localStorage.getItem("authToken") ? (
            <div className="d-flex">
              <Link
                class="btn  active text-success mx-1"
                to="/login"
                style={{ background: "#d8ffd8", fontWeight: "700" }}
              >
                Login
              </Link>
              <Link
                class="btn active text-success mx-1"
                to="/createuser"
                style={{ background: "#d8ffd8", fontWeight: "700" }}
              >
                SignUp
              </Link>
            </div>
          ) : (
            <div>
              <div class="btn text-success mx-2"
                style={{
                  background: "#d8ffd8",
                  fontFamily: "revert-layer",
                  fontWeight: "700",
                }}
              onClick = {()=>setcartview(true)}>My Cart
             <span> <Badge pill bg = "success">{products.length}</Badge></span>
              </div>
        {
          cartview == true ?
          <Modal onClose={()=>setcartview(false)}><Cart></Cart></Modal>
          :null
        }
              <div
                class="btn text-danger mx-2"
                style={{
                  background: "#d8ffd8",
                  fontFamily: "revert-layer",
                  fontWeight: "700",
                }}
                onClick={logouthandle}
              >
                Logout
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
