import React from 'react';
import data from "../data/data.json";
import "../styles/StarProduct.css"



const StarProduct = () => {
  return (
    <div className='starProduct'>
        <div>
            <a href={data.starProduct[0].url}><img src={data.starProduct[0].image} alt="1st Product"/></a>
        </div>
        <div>
            <a href={data.starProduct[1].url}><img src={data.starProduct[1].image} alt="2nd Product"/></a>
            <a href={data.starProduct[2].url}><img src={data.starProduct[2].image} alt="3rd Product"/></a>
            <a href={data.starProduct[3].url}><img src={data.starProduct[3].image} alt="4th Product"/></a>
        </div>
    </div>
  )
}

export default StarProduct