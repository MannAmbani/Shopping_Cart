import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
import add_icon from '../Assets/plus.png'
import { Link } from 'react-router-dom'

export const CartItems = () => {
    // using shopcontext to perform crud operation on cart
    const {getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart} = useContext(ShopContext)

  return (
    <div className='cartitems'>
        {/* item lables */}
        <div className="cartitems-format-main">
            <p>Product</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Add</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr/>
        {/* items */}
        {all_product.map((e) =>{
            if(cartItems[e.id] > 0){
                return <div>
                    <div className="cartitems-format cartitems-format-main">
                <img src={e.image} alt='' className='carticon-product-icon'/>
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                <img className='cartitems-add-item cartitems-remove-item' src={add_icon} onClick={() => {addToCart(e.id)}} alt=''/>
                <p>${e.new_price*cartItems[e.id]}</p>
                <img className='cartitems-remove-item' src={remove_icon} onClick={() => {removeFromCart(e.id)}} alt=''/>
            </div>
            <hr/>
                    </div>
    
            }
            return null;
        })}

{/* payment info */}
        <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>Cart Totals</h1>
                <div>
                    <div className="cartitems-total-item">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr/>
                    <div className="cartitems-total-item">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr/>
                    <div className="cartitems-total-item">
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                </div>
                <Link to='/checkout'><button>PROCEED TO CHECKOUT</button></Link>
            </div>
            {/* promo */}
            <div className="cartitems-promocode">
                <p>If you have a promo code, Enter it here</p>
                <div className="cartitems-promobox">
                    <input type='text' placeholder='Promo Code'/>
                    <button>Submit</button>
                </div>
                
            </div>
        </div>
    </div>
  )
}
