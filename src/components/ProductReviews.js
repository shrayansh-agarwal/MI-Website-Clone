import React from 'react'
import ProductReviewCard from "./ProductReviewCard.js"
import data from "../data/data.json";
import "../styles/ProductReviews.css"

const productReviews=data.productReviews;
const ProductReviews = () => {
  return (
    <div className='ProductReviews'>
        {productReviews.map((item, index)=>(
            <ProductReviewCard key={index} price={item.price} name ={item.name} image={item.image} review={item.review} index={index}/>
        ))}
    </div>
  )
}

export default ProductReviews