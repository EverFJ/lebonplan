import React, { useState, useEffect } from "react";

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
  const { firstName, surName, userName, email, profileImage } = user;

  if (user) {
    return (
      <div className="m-4">
        <h1>Profil</h1>
        <h2>
          {firstName} {surName}
        </h2>
        <p>Username: {userName}</p>
        <p>email: {email}</p>
        <img src={apiUrl + profileImage} alt={`${userName} picture`} />
      </div>
    );
  }
}
