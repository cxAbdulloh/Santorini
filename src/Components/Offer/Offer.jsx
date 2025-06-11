import React from 'react'
import "./Offer.css"
import { assets } from '../../assets/assets'

const Offer = () => {
  return (
    <>
    <section id='offer'>
        <h1 className='offer-description'>Hotel activities santorini</h1>
        <div className="offer-container">
            <div className="offer-buttons">
                <button className="offer-btn-one">weddings</button>
                <button className="offer-btn-two">business meetings</button>
                <button className="offer-btn-three">corporate events</button>
            </div>
            <div className="offer-images">
                <img src={assets.offer2} alt="" className="offer-image-one" />
                <img src={assets.offer1} alt="" className="offer-image-two" />  
            </div>
        </div>
    </section>
    </>
  )
}

export default Offer