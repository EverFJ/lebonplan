import React, { useState, useEffect } from "react";

export default function Home(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products")
      .then(res => res.json())
      .then(data => {
        console.log("fetch data", data);
        return setProducts(data);
      });
  }, []);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
