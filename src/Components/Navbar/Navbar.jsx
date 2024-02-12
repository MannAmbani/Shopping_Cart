import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import profile_icon from '../Assets/account.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

export const Navbar = () => {
  const [menu, setMenu] = useState("Shop");
  const { getTotalCartItems } = useContext(ShopContext);
 
  
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="" />
        <p>FIRST CHOICE</p>
        <ul className="nav-menu">
          <li onClick={() => { setMenu("shop") }}><Link style={{ textDecoration: 'none' }} to='/'>HOME</Link>{menu === "shop" ? <hr /> : <></>}</li>
        </ul>
      </div>

      
      <div className='nav-login-cart'>
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        
        <div className="nav-cart-count">{getTotalCartItems()}</div>

       <Link to='/profile'> <img src={profile_icon} alt='' className='nav-login-profile-img'/></Link>

       
      </div>
    </div>
  )
}
