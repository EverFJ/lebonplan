import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Profil(props) {
  const [user, setUser] = useState([]);
  const id = props.match.params.id;
  const apiUrl = "http://localhost:8000";

  useEffect(() => {
    fetch(apiUrl + "/users/" + id)
      .then(res => res.json())
      .then(data => setUser(data));
  }, []);

  console.log(`PROFILE.JSX user`, user);
  const { firstName, surName, userName, email, profileImage, _id } = user;

  if (user) {
    return (
      <div className="m-4">
        <h1 className="text-center">Profil</h1>
        <div className="row mt-4">
          <div className="col-5">
            <h2>
              {firstName} {surName}
            </h2>
            <p>Username: {userName}</p>
            <p>email: {email}</p>
            <Link to="/admin">
              <button className="btn btn-primary">See my products</button>
            </Link>
          </div>
          <div className="col-5">
            <img
              src={apiUrl + "/images" + profileImage}
              alt={`${userName} picture`}
              style={{ width: "400px" }}
            />
          </div>
        </div>
      </div>
    );
  }
}
