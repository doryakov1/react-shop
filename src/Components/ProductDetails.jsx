import React from 'react'
import './ProductDetails.css'
export default function ProductDetails(props) {
    return (
        <div className='product-details'>
            <div className='product-img'>
            <h4>{props.title}</h4>
                <img src={props.image} alt="img" />
                <span>{props.price}</span>
            </div>
            <div className='product-content'>
                <span>{props.category}, {props.description}</span>
            </div>
            <button onClick={()=>{props.addProductToCart(props.image,props.title,props.price)}}>➕</button>
        </div>
    )
}
