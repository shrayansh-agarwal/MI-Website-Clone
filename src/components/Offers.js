import React from 'react'
import Offer from "./Offer.js"
import data from '../data/data.json'
import "../styles/Offers.css"

const Offers = () => {
  return (
    <div className="offersSection">
        {data.offer.map((item,index)=>(
        <Offer key={item.image} index={index} src={item.image} link={item.url}/>
        ))}
    </div>
  )
}

export default Offers
