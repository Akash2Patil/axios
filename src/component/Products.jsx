import React, { useEffect, useState } from 'react';
import instance from '../utils/axios';

const Products = () => {
  const [products, setproducts] = useState([])

  const getproducts = () => {

    instance.get("/products")
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
  const delproducts = () => {
    setproducts([])
  }
  console.log({ products });

  useEffect(() => {
    getproducts()
  }, [])
  return (
    <div className='mt-10 px-10'>
      <div className="btn flex gap-5">
        {/* <button onClick={getproducts} className='bg-blue-500 px-4 py-3 text-white rounded cursor-pointer'>
          Get products
        </button>
        <button onClick={addproducts} className='bg-green-500 px-4 py-3 text-white rounded cursor-pointer'>
          Add products
        </button> 
        <button onClick={delproducts} className='bg-red-500 px-4 py-3 text-white rounded cursor-pointer'>
          Delete products
        </button>*/}
      </div>
      <br /><br />
      <ul>
        {products.length > 0 ? products.map(pro => <li key={pro.id} className='bg-red-500 w-full py-3 px-5 text-white mb-2'>{pro.title}</li>) : <h1>loading...</h1>}

      </ul>
    </div>
  )
}

export default Products