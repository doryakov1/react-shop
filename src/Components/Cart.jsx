import React from 'react'
import CartDetails from './CartDetails'
import './Cart.css'

export default function Cart(props) {
  const onBuy= ()=>{
    props.setCart([]);
    props.setTotalAmount(0);
  }

  return (
    <div className='cart'>
    {props.cart.map((product , idx)=>{
      return <CartDetails image ={product.image } title ={product.title } price ={product.price } idx={idx}  removeProductFromCart={props.removeProductFromCart}/>
    })}
    <label For="buy">Total: ${props.totalAmount}</label>
        <button name='buy' onClick={onBuy}>Buy</button>
    </div>
  )
}
