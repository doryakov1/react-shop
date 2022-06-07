import React from 'react'
import './HomePage.css'
import Product from './Product'
import { Link } from 'react-router-dom'
export default function HomePage(props) {
  return (
    <div className='home-page'>
      {props.loading}
        {props.products.map((product)=>{
            return (<div>
              <Link className='link' to={'/react-shop/product'+product.id}><Product title={product.title} image={product.image} price={product.price}
               category={product.category} description={product.description} loading={props.loading} addProductToCart ={props.addProductToCart}/></Link>
               <button  onClick={()=>{props.addProductToCart(product.image,product.title,product.price)}}>➕</button></div>
            )
        })}
    </div>
  )
}
