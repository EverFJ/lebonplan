import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard(props) {
  const { _id, name, city, price, description, image } = props.product;
  const apiUrl = "http://localhost:8000";
  return (
    <div className="card m-2" style={{ width: "40%" }}>
      <div className="card-body">
        <h3 className="card-title mt-2">{name}</h3>
        <h5 className="card-title mt-2">{price}€</h5>
        <p className="card-text mt-2">{description}</p>
      </div>
      <img
        className="card-img-top"
        src={apiUrl + image}
        alt={`${name} image`}
      />
      <Link to={`/products/${_id}`}>
        <button className="btn btn-primary">More Info</button>
      </Link>
    </div>
  );
}
