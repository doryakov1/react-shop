import React from 'react'
import './CartDetails.css'

export default function CartDetails(props) {
  const sliceTitle =(title)=>{
    if(title.length > 10){
        return title.slice(0 , 10)+'...'
    }else{
        return title
    }
}
  return (
    <div className='cart-details'>
      <img src={props.image} alt="img" />
      <span>{sliceTitle(props.title)}</span>
      <span>{'$'+props.price}</span>
      <button onClick={()=>{props.removeProductFromCart(props.idx)}}>X</button>
    </div>
  )
}
