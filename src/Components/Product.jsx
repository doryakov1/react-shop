import React from 'react'
import './Product.css'
export default function Product(props) {
    const sliceTitle =(title)=>{
        if(title.length > 20){
            return title.slice(0 , 20)+'...'
        }else{
            return title
        }
    }

    const sliceCategory=(category)=>{
        if(category.length > 20){
            return category.slice(0 , 20)+'...'
        }else{
            return category
        }
    }
    const sliceDescription =(descriptio)=>{
        if(descriptio.length > 40){
            return descriptio.slice(0 , 40)+'...'
        }else{
            return descriptio
        }
    }
  return (
    <div className='product'>
        {props.loading}
         <h4>{sliceTitle(props.title)}</h4>
         <img src={props.image} alt="img" />
         <span>{props.price}</span>
         <div>
         <span>{sliceCategory(props.category)}</span>
         <span>{sliceDescription(props.description)}</span>
         </div>
    </div>
  )
}