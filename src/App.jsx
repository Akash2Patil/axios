import axios from "axios";
import React, { useState, useEffect } from "react";

const App = () => {
  const [products, setProducts] = useState([]); // State to store API data
  const [loading, setLoading] = useState(true); // State to handle loading

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        console.log(response);
        
        setProducts(response.data); // Store API response in state
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="w-full h-auto bg-zinc-900 text-white p-5">
      <h1 className="text-2xl font-bold mb-4">Hi, my name is Akash Patil</h1>
      
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex gap-10 flex-wrap">
          {products.map((product) => (
            <div key={product.id} className="p-3 border border-gray-700 mb-2 w-[20%] h-auto">
              <img className="w-[200px]" src={product.image} alt="" />
              <h2 className="text-xl">{product.title}</h2>
              <p className="text-gray-400">${product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
