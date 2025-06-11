import React, { useEffect } from "react";
import "./Active.css";
import { assets } from "../../assets/assets";
import AOS from "aos";
import "aos/dist/aos.css";

const Active = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,     
    });
  }, []);

  return (
    <div>
      <section>
        <h1 className="active-description">
          Active holidays in santorini hotel
        </h1>
        <div className="active-container">
          <div className="active-buttons">
            <button className="active-btn-one">Boat trips</button>
            <button className="active-btn-two">Fishing</button>
            <button className="active-btn-three">Extreme</button>
          </div>
          <div className="active-images">
            <img src={assets.photo4} alt="" className="active-image-one" data-aos="fade-right"/>
            <img src={assets.photo5} alt="" className="active-image-two" data-aos="fade-left"/>
          </div>
          <div className="second-active-images">
            <img src={assets.photo6} alt="" className="active-image-three" data-aos="fade-right"/>
            <img src={assets.photo7} alt="" className="active-image" data-aos="fade-left"/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Active;
