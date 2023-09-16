import React from 'react'


export default function ProductList({products,onItemClick}) {
  return (
    <div className="parant-p">
        {products.map(item=>(
           <div className='child-product' key={item.id} onClick={()=>onItemClick(item)}>
           <img src={item.image} alt="" />
                 </div>
        ))}
    </div>
  )
}
