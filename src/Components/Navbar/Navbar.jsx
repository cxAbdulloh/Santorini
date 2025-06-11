import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 0 ? count - 1 : 0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,     
    });
  }, []);

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
            <Link to={"/"}><img src={assets.logo} alt="" className="nav-logo" /></Link>
          </div>
        </div>
        <div className="reg">
          <Link to={"/sign-up"}><button className="reg-btn">Sign UP</button></Link>
          <div className="btn">
            <button className="nav-btn">Booking</button>
          </div>
        </div>
      </nav>
      <div className="bottom-logo" data-aos="fade-right">
            <img src={assets.logo} alt="" className="bottom-nav-logo" />
          </div>
      <h1 className="second-search-description" data-aos="fade-left">
          Comfortable holiday <br /> in Crimea
        </h1>
      <div
        className="header-container"
        style={{ backgroundImage: `url(${assets.header})` }}
      >
        <h1 className="search-description">
          Comfortable holiday <br /> in Crimea
        </h1>
        <div className="search-panel">
          <div className="date-section">
            <div className="icon-placeholder" />
            <img src={assets.calendar} alt="" />
            <span>ARRIVAL DATE - DEPARTURE DATE</span>
            <div className="icon-button" />
            <div className="divider" />
          </div>

          <div className="people-section">
            <div className="icon-placeholder" />
            <img src={assets.people} alt="" />
            <span>NUMBER OF PEOPLE</span>
            <div className="controls">
              <button onClick={increment} className="circle-button">
                +
              </button>
              <span className="count">{count.toString().padStart(2, "0")}</span>
              <button onClick={decrement} className="circle-button">
                −
              </button>
            </div>
            <div className="divider" />
            <button className="search-button">
              <img src={assets.search} alt="" className="search-logo" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
