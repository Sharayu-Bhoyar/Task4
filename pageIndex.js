"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [goldPrice, setGoldPrice] = useState(0);
  const [silverPrice, setSilverPrice] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products").then((res) => setProducts(res.data));
    axios.get("http://localhost:5000/api/prices").then((res) => {
      setGoldPrice(res.data.rates.XAU);
      setSilverPrice(res.data.rates.XAG);
    });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Jewelry Shop</h1>
      <p className="text-lg mt-2">Gold Price: ${goldPrice} | Silver Price: ${silverPrice}</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
        {products.map((product) => (
          <div key={product._id} className="border p-4 rounded-lg shadow-md">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded" />
            <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
            <p className="text-gray-600">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
