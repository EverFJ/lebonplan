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
      <form action="/products" method="post">
        <div className="row m-4">
          <div className="col-4">
            <input
              className="form-control"
              type="text"
              name="name"
              placeholder="Search for a particular product"
            />
          </div>
          <div className="col-3">
            <select
              className="form-select"
              aria-label="select your city"
              name="city"
            >
              <option value="" disabled>
                Select your city
              </option>
              <option value="paris">Paris</option>
              <option value="lyon">Lyon</option>
              <option value="marseille">Marseille</option>
            </select>
          </div>
          <div className="col-3">
            <input
              className="form-control"
              type="text"
              name="price"
              placeholder="Enter your maximum price"
            />
            <button className="btn btn-primary m-4" type="submit">
              Search
            </button>
          </div>
        </div>
      </form>
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
