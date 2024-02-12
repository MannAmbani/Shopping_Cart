import React from 'react'
import { Link } from 'react-router-dom'
import './OrderPlaced.css'

export const OrderPlaced = () => {
    return (
        <div className="orderplaced">
        <div className="order-placed-container">
          <h1>Order Placed Successfully</h1>
          <p>Thank you for your purchase!</p>
          <p>Your order has been placed successfully. We'll send you an email confirmation shortly.</p>
    
          <Link to="/">
            <button className="home-button">Go to Home Page</button>
          </Link>
        </div>
        </div>
      )
}
