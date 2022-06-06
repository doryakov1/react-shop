import React from 'react'
import './Product.css'
export default function Product(props) {
    const sliceTitle =(title)=>{
        if(title.length > 15){
            return title.slice(0 , 15)+'...'
        }else{
            return title
        }
    }

    const sliceCategory=(category)=>{
        if(category.length > 15){
            return category.slice(0 , 15)+'...'
        }else{
            return category
        }
    }
    const sliceDescription =(descriptio)=>{
        if(descriptio.length > 30){
            return descriptio.slice(0 , 30)+'...'
        }else{
            return descriptio
        }
    }
  return (
    <div className='product'>
        {props.loading}
         <h4>{sliceTitle(props.title)}</h4>
         <img src={props.image} alt="img" />
         <span>{'$'+props.price}</span>
         <div>
         <span>{sliceCategory(props.category)}</span>
         <span>{sliceDescription(props.description)}</span>
         </div>
    </div>
  )
}
