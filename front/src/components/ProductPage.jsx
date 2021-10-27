import React, { useState, useEffect } from "react";

export default function ProductPage(props) {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const id = props.match.params.id;
    fetch("http://localhost:8000/products/" + id)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, []);
  const { title, description, price, sellerUsername, city, image } = product;
  return (
    <div className="container">
      {product && (
        <>
          <h1>{title}</h1>
          <p>{description}</p>
          <h2>{price}€</h2>
          <h3>Seller : {sellerUsername}</h3>
          <h4>From : {city}</h4>
          <img src={image} alt={`${title} image`} />
        </>
      )}
    </div>
  );
}
