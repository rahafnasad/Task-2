import React, { useEffect, useState } from 'react'

export default function Onion() {
  let [res,setRes]=useState([]);
  const getres = async()=>{
    let reponse =await fetch("https://forkify-api.herokuapp.com/api/search?q=onion");
    let date =await reponse.json();
    setRes(date.recipes);
    
  } 
  useEffect(()=>{
    getres();
  },[])

  return (
<>
<div className="container">
  <h1 className='text-center my-5'>Onion</h1>
<div className='row'>
  {
    res.map((ele)=>{
      return <div className='col-md-4 my-3' key={ele.recipe_id}>
        <h2 className='mb-2 me-2'>{ele.title}</h2>
        <img src={ele.image_url} alt="" />
      </div>
    })
  }
</div>
</div>
</>
  )
}
