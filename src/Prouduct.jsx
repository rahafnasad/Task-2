import React, { useEffect, useState } from 'react'

export default function Prouduct() {
  let [product,setProduct]=useState([]);
  const getProduct = async()=>{
    let reponse =await fetch("https://fakestoreapi.com/products");
    let date =await reponse.json();
    setProduct(date);
    
  } 
  useEffect(()=>{
    getProduct();
  },[])

  return (
<>
<div className="container">
  <h1 className='text-center my-5'>Products</h1>
<div className='row'>
  {
    product.map((ele)=>{
      return <div className='col-md-4 my-3' key={ele.id}>
        <h2 className='mb-2 me-2'>{ele.title}</h2>
        <img src={ele.image} alt="" />
      </div>
    })
  }
</div>
</div>
</>
  )
}
