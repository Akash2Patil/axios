import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {
  const[products,setproducts]= useState([])
  
  const api = "https://fakestoreapi.com/products";
  const getproducts = () => {

    axios.get(api)
      .then((response) => {
        // console.log(response);
        setproducts(response.data)
      })
      .catch((err) => {
        console.log(err);

      })
  }
  const addproducts = () => {
    axios.post(api, {
      "id": 0,
      "title": "my products",
      "price": 0.1,
      "description": "best specks",
      "category": "specks",
      "image": "http://example.com"
    }).then((res) => {
      console.log(res);

    }).catch(err => console.log(err));
  }
  console.log({products});

  useEffect(()=>{
    getproducts()
  },[])
  
return (
  <div className='px-10 py-20 w-full h-screen'>
    <button onClick={getproducts} className='bg-red-500 px-4 py-3 text-white rounded mr-3'>
      get products
    </button>
  <button onClick={addproducts} className='bg-green-500 px-4 py-3 text-white rounded'>
        add products
  </button>
  <br /><br />
  <ul>
    {products.length > 0 ? products.map(pro => <li key={pro.id} className='bg-red-500 w-full py-3 px-5 text-white mb-2'>{pro.title}</li>) : <h1>loading...</h1> }
    
  </ul>
  </div>
)
}

export default App