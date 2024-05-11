import React from 'react'

const Card = ({name,id,imgsrc,price,handler}) => {
  return (
    <div className='productCard'>
        <img src={imgsrc} alt='name'/>
        <p>{name}</p>
        <h4>${price}</h4>
        <button onClick={()=>handler({name,price,id,quantity:1,imgsrc})}>Add To Cart</button>
    </div>
  )
}

export default Card