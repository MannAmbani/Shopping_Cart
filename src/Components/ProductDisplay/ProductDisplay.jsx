import React, { useContext } from 'react'
import './ProductDisplay.css'
import start_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import { ShopContext } from '../../Context/ShopContext'

export const ProductDisplay = (props) => {
    const{product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
        
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt=''/>
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-stars">
                <img src={start_icon} alt=''/>
                <img src={start_icon} alt=''/>
                <img src={start_icon} alt=''/>
                <img src={start_icon} alt=''/>
                <img src={star_dull_icon} alt=''/>
                <p>(122)</p>
                
            </div>

            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">
                    ${product.old_price}
                </div>
                <div className="productdisplay-right-price-new">
                    ${product.new_price}
                </div>
            </div>

            <div className="productdisplay-right-description">
            Lorem ipsum dolor sit amet, consectetur adipisci.
            </div>
            <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-size">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XLL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className="productdisplay-right-category"><span>Category :</span>Men, T-Shirt, Tank</p>
            <p className="productdisplay-right-category"><span>Tags :</span>Morden, Latest</p>
        </div>

        
        </div>
  )
}
