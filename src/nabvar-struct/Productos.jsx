import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

export default function Productos() {
  
const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      setProducts(data);
    };
    getProducts();
  }, []);
console.log(products);

  return (  
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-between gap-2 h-[50%] w-[90%] mt-3 ml-3 mr-3">
      {products.map((product) => (
        <div
          key={product.id}
          className="border-2 border-black rounded-lg flex flex-col gap-2"
        >
          <img
            className="h-10  flex justify-start mt-2 mx-auto"
            src={product.image}
            width={100}
            height={100}
          />
          <h3 className="text-[#999999] ml-3">{product.title}</h3>
          <p className=" ml-3">{product.description}</p>
          <h3 className="text-[#999999] ml-3">{product.price}</h3>
          <input
            placeholder="Opiniones del producto"
            className="bg-[#eee6e6] h-6 w-48 ml-3"
            type="text"
          />
        </div>
      ))}
    </div>
  );
}
