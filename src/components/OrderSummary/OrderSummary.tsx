import React, {useEffect} from 'react'
import './OrderSummary.css'

export default function OrderSummary() {
    useEffect(() => {
        document.title = "Order Summary Component"
    })

    return (
    <div className="OrderSummaryComponent">
    <main>
    <div className="summary-card">
      <div className="hero">
        <img src="OrderSummary/illustration-hero.svg" alt="Illustration Hero" />
      </div>
      <div className="order">
        <h1 className="order-header">Order Summary</h1>
        <p className="order-description">  
          You can now listen to millions of songs, audiobooks, 
          and podcasts on any device anywhere you like!
        </p>
      </div>
      <div className="pricing-plan">
        <img src="OrderSummary/icon-music.svg" alt="Music Icon" />
        <div className="pricing-option">
          <div className="plan-time">Annual Plan</div>
          <div className="rate">$59.99/year</div>
        </div>
        <a className="change" href="#">Change</a>
      </div>
      <div className="buttons">
          <a className="proceed" href="#">Proceed to Payment</a>
          <a className="cancel" href="#">Cancel Order</a>
      </div>
    </div>
  </main>
  </div>
        
    )

}