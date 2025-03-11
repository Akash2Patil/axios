import axios from 'axios'
import React from 'react'

const App = () => {
  const api = "https://fakestoreapi.com/products";
  const getproducts = () => {

    axios.get(api)
      .then((response) => {
        console.log(response);
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

return (
  <div className='px-10 py-20 w-full h-screen'>
    <button onClick={getproducts} className='bg-red-500 px-4 py-3 text-white rounded'>
      get products
    </button>
  <button onClick={addproducts} className='bg-green-500 px-4 py-3 text-white rounded'>
        add products
  </button>
  </div>
)
}

export default App