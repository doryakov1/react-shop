import React from 'react'
import './CartDetails.css'

export default function CartDetails(props) {
  return (
    <div className='cart-details'>
      <img src={props.image} alt="img" />
      <span>{props.title}</span>
      <span>{props.price}</span>
      <button onClick={()=>{props.removeProductFromCart(props.idx)}}>X</button>
    </div>
  )
}
