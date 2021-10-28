import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ProductPage(props) {
  const [product, setProduct] = useState([]);
  const apiUrl = "http://localhost:8000";
  const id = props.match.params.id;

  useEffect(() => {
    fetch(apiUrl + "/products/" + id)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, []);
  console.log(`product`, product);
  const { name, description, price, sellerUsername, city, image } = product;

  return (
    <div className="container">
      {product && (
        <div className="m-4">
          <h1>{name}</h1>
          <h2>{price}€</h2>
          <h3>Seller : {sellerUsername ? sellerUsername : "Unknown"}</h3>
          <h4>From : {city}</h4>
          <p>{description}</p>
          <img src={apiUrl + image} alt={`${name} image`} />
        </div>
      )}
      <Link to="/">
        <button className="btn btn-primary">Go back</button>
      </Link>
    </div>
  );
}
