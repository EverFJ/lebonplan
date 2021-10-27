import React, { useState, useEffect } from "react";

export default function ProductPage(props) {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const id = props.match.params.id;
    fetch("http://localhost:8000/products/" + id)
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
          <img src={image} alt={`${name} image`} />
        </div>
      )}
    </div>
  );
}
