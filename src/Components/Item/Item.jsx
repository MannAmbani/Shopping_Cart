import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

export const Item = (props) => {
  // general item ui for all items
  return (
    <div className='item'>
      {/* clicking item navigates to product details page and passing product id in link */}
        <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt=''/></Link>
        <p>{props.name}</p>
        <div className="item-price">
            <div className="item-price-new">
                ${props.new_price}
            </div>
            <div className="item-price-old">
                ${props.old_price}
            </div>
        </div>
    </div>
  )
}
