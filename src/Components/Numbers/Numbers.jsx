import React from "react";
import "./Numbers.css";
import { assets } from "../../assets/assets";

const Numbers = () => {


  return (
    <>
      <section id="number-section">
        <h1 className="number-description">Numbers</h1>
        <div className="number-container">
           
          <div className="number-items">
            <div className="none">
              <img src={assets.photo1} alt="" className="number-image" />

              <div className="number-item">
                <h2 className="number-title">Standard</h2>
                <p className="number-text">
                Terrace | Number of guests: 2
                </p>
                <span className="number-price">from 500$/night</span>
              </div>
              
              <div className="second-number-item">
                <button className="number-btn">Explore</button>
                <button className="btn-bottom">More {">"}</button>
              </div>
            </div>
          </div>
          <div className="number-items" >
            <div className="none">
              <img src={assets.photo2} alt="" className="number-image" />
              <h2 className="number-title">Premium</h2>
              <p className="number-text">
              Sea view | Number of guests: 6
              </p>
              <span className="number-price">from 1000$/night</span>
              <div className="second-number-item">
                <button className="number-btn">Explore</button>
                <button className="btn-bottom">More {">"}</button>
              </div>
            </div>
          </div>
          <div className="number-items">
            <div className="none">
              <img src={assets.photo3} alt="" className="number-image" />
              <h2 className="number-title">Vip</h2>
              <p className="number-text">
              Mountains | Number of guests: 4
              </p>
              <span className="number-price">from 2500$/night</span>
              <div className="second-number-item">
                <button className="number-btn">Explore</button>
                <button className="btn-bottom">More {">"}</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Numbers;
