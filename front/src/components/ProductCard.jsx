import React from "react";

export default function ProductCard(props) {
  const { _id, name, city, price, description, image } = props.product;
  return (
    <div className="card m-2" style={{ width: "18rem" }}>
      <div className="card-body">
        <h3 className="card-title mt-2">{name}</h3>
        <h5 className="card-title mt-2">Prix : {price}€</h5>
        <p className="card-text mt-2">{description}</p>
      </div>
      <img className="card-img-top" src={image} alt={`${name} image`} />
    </div>
  );
}
