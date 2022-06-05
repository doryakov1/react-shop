import React from 'react'
import './Menu.css'
import {Link} from 'react-router-dom'

export default function Menu(props) {
  return (
    <div className='menu'>
      <input type="search" placeholder='Search'/> 
        <Link className='link' to="/react-shop/cart"><button className='cart'>{props.cart.length}🛒</button></Link>
    </div>
  )
}
