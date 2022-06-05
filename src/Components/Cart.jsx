import React from 'react'
import CartDetails from './CartDetails'
import './Cart.css'

export default function Cart(props) {
  return (
    <div className='cart'>
    {props.cart.map((product , idx)=>{
      return <CartDetails image ={product.image } title ={product.title } price ={product.price } idx={idx}  removeProductFromCart={props.removeProductFromCart}/>
    })}
        
    </div>
  )
}
