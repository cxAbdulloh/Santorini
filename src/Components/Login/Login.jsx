import React, { useRef, useState } from "react";
import "./Login.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [currState,setCurrState,] = useState("Login")

  return (
    <>
      <nav className="menu">
        <div
          className={`container menu ${isOpen ? "menu-open" : ""}`}
          onClick={toggleMenu}
          ref={menuRef}
        >
          <button className="menu-btn">
            <span></span>
            <span></span>
          </button>
          <div className="menu-list">
            <div className="all-menu-items">
              <ul className="menu-items">
                <li className="menu-item">
                  <a href="">Rooms and prices</a>
                </li>
                <li className="menu-item">
                  <a href="">About the hotel</a>
                </li>
                <li className="menu-item">
                  <a href="">
                    <span style={{ color: "#4567aa" }}>Services</span>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="">
                    <span style={{ color: "#4567aa" }}>Living conditions</span>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="">
                    <span style={{ color: "#4567aa" }}>News</span>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="">
                    <span style={{ color: "#4567aa" }}>Contacts</span>
                  </a>
                </li>

                <li className="menu-item">
                  <a href="">How to get there</a>
                </li>
              </ul>

              <ul className="second-menu-items">
                <div className="btn">
                  <button className="burger-btn">Booking</button>
                </div>
                <li>
                  <a href="">
                    <span style={{ color: "#4567aa" }}>8(912) 038-80-44</span>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="">Attractions</a>
                </li>
                <li className="menu-item">
                  <a href="">Extreme</a>
                </li>
                <li className="menu-item">
                  <a href="">Boat trips</a>
                </li>
                <li className="menu-item">
                  <a href="">Fishing</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="logo">
            <Link to={"/"}>
              <img src={assets.logo} alt="" className="nav-logo" />
            </Link>
          </div>
        </div>
        <div className="reg">
          <button className="reg-btn">Sign UP</button>
          <div className="btn">
            <button className="nav-btn">Booking</button>
          </div>
        </div>
      </nav>
      <section>

        <h1 className="login-description">
          Do you want to become the embodiment of the romance and heroism of the
          "dreamers" and just a skilled rider, cutting through the water
          surface, soaring high up from the waves like a rocket? We will help
          you make it happen.
        </h1>

        <h1 className="second-login-description">
          We are justifiably proud of our excellent material and technical base
          and can offer our guests boards from the best world brands: F2, Tabou,
          Unifiber, Gaastra, Big, Starboard, wide boards of large capacity with
          daggerboards for learning "from scratch", as well as boards for
          advanced riders, sails ranging from 1.5 to 7.5 m, recreational kayaks
          with "seatUp" seating, equipment rental.
        </h1>

        <h1 className="three-login-container">Windsurfing</h1>
        <div className="login-container">
          <div className="login-images">
            <img src={assets.photo8} alt="" className="login-image-one" />
            <img src={assets.photo9} alt="" className="login-image-two" />
          </div>
        </div>

    <h1 className="login-popup-description">Living with us? <br />
    Order a service</h1>

     <div className='login-popup'>
      <form className="login-popup-container">
      <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
            {currState==="Login" ? <></>:<input type="text" placeholder='Your Name' required/>}
            <input type="email" placeholder='Your Email' required/>
            <input type="password" placeholder='Your Password' required/>
        </div>
       <button> <Link to={"/"} style={{color:"#fff"}}>{currState==="Sign Up" ? "Create account":"Login"}</Link></button>
        <div className="login-popup-condition">
            <input type="checkbox" required/>
            <p>By contiuning, i agree to the terms of use & Private policy.</p>
        </div>
        {currState==="Login" 
        ? <p>Creat a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
        :<p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>
        }

      </form>
    </div>
      </section>
      <Footer/>
    </>
  );
};

export default Login;
