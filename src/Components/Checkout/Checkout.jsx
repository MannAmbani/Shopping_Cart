import React, { useContext, useState } from 'react'
import './Checkout.css'
import { ShopContext } from '../../Context/ShopContext';
import { Link } from 'react-router-dom';

export const Checkout = () => {
    
    // check out page consist of payment method amount and option to change address
      const [shippingAddress, setShippingAddress] = useState("139 Jackson Avenue");
    //   using following  hooks for future use
      const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
      const [isEditing, setEditing] = useState(true); 

      const {getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart,clearCart} = useContext(ShopContext)

      //button and onclick or onchange handeling methods
    
      const handleInputChange = (e) => {
        
        setShippingAddress(e.name);
      };
    
      const handlePaymentMethodChange = (method) => {
        setSelectedPaymentMethod(method);
      };
    
      const handleEditClick = () => {
        setEditing(true);
      };
    
      const handleSaveClick = () => {
        setEditing(false);
      };
    
      const handlePlaceOrderClick = () => {
        clearCart();
      };
    
      return (
        <div className='checkout'>
        <div className="checkout-container">
          <h1>Checkout</h1>
    
        
          <div className="product-details">
            <h2>Product Name</h2>
            {all_product.map((e) =>{
            if(cartItems[e.id] > 0){
                return <div><p>{e.name} ({cartItems[e.id]})</p></div>
    
            }
            return null;
        })}
            
            <p>Price: ${getTotalCartAmount()}</p>
          </div>
    
          <div>
            <h2>Shipping Address</h2>
            <label>
              Address:
              <input className='checkout-address-change-lable' type="text" name="name" value={shippingAddress} onChange={handleInputChange} disabled={!isEditing}/>
            </label>
           
            <button onClick={isEditing ? handleSaveClick : handleEditClick}>
              {isEditing ? 'Save Address' : 'Edit Address'}
            </button>
          </div>
    
          <div className='checkout-container-paymentmode'>
            <h2>Payment Method</h2>
            <label>
              <input type="radio" name="paymentMethod" value="creditCard" checked={selectedPaymentMethod === 'creditCard'}
                onChange={() => handlePaymentMethodChange('creditCard')}
              />
              Credit Card
            </label>
           
          </div>
    
          
          <div className="order-summary">
            <h2>Order Summary</h2>
            
            <p>Product Cost: ${getTotalCartAmount()}</p>
            <p>Shipping Cost: Free</p>

            <hr />
            <p>Total: ${getTotalCartAmount()}</p>
          </div>
    
        {/* navigating to place order place */}
          <Link to='/orderplaced'><button onClick={handlePlaceOrderClick}>Place Order</button></Link>
        </div>
        </div>
      )
}
