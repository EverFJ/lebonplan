import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

export default function Home(props) {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState(0);

  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  console.log(`products`, products);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/products", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        name: name ? name : "",
        city: city ? city : "",
        price: price ? price : 0,
      }),
    })
      .then((res) => {
        console.log(`res`, res);
        return res.json();
      })
      .then((data) => {
        console.log(`data`, data);
        return setProducts(data);
      });
  };

  return (
    <div className="container">
      <form action="/products" method="post">
        <div className="row m-4">
          <div className="col-4">
            <input
              className="form-control"
              type="text"
              name="name"
              placeholder="Search for a particular product"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {/* <label className="form-label">Product</label> */}
          </div>
          <div className="col-3">
            <select
              className="form-select"
              aria-label="select your city"
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            >
              <option value="" disabled>
                Select your city
              </option>
              <option value="paris">Paris</option>
              <option value="lyon">Lyon</option>
              <option value="marseille">Marseille</option>
            </select>
            {/* <label className="form-label">City</label> */}
          </div>
          <div className="col-3">
            <input
              className="form-control"
              type="number"
              name="price"
              placeholder="Enter your maximum price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            {/* <label className="form-label">Price</label> */}
          </div>
          <div className="col-2">
            <button
              className="btn btn-outline-dark"
              type="button"
              onClick={handleSearchSubmit}
            >
              Search
            </button>
          </div>
        </div>
      </form>
      {products && products.length !== 0 && (
        <>
          <p>{products.length} produits en vente</p>
          <div className="d-flex justify-content-center">
            {products.length !== 0 &&
              products.map((product) => <ProductCard product={product} />)}
          </div>
        </>
      )}
    </div>
  );
}
