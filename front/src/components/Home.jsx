import React, { useState, useEffect } from "react";

export default function Home(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);
  console.log(`products`, products);
  return (
    <>
      <h1>Home</h1>
      <p>{products.length} produits en vente</p>
      <ul>
        {products.length !== 0 &&
          products.map(product => (
            <li>
              <p>Produit : {product.name}</p>
              <p>Ville : {product.city}</p>
              <p>Prix : {product.price}</p>
            </li>
          ))}
      </ul>
      ;
    </>
  );
}
