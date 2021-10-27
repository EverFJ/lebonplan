import React, { Component } from "react";

export default class Signup extends Component {
  render() {
    return (
      <div className="SignUpForm">
        <form>
          <h1>Please Sign Up</h1>

          <div className="form-group firstName">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
            />
          </div>

          <div className="form-group surName">
            <label>Surname</label>
            <input type="text" className="form-control" placeholder="Surname" />
          </div>

          <div className="form-group userName">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
            />
          </div>

          <div className="form-group userEmail">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group userPassword">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
            />
          </div>

          <button type="button" className="btn btn-cyan-900 btn-lg btn-block">
            Register
          </button>
        </form>
      </div>
      // Sofiane => Team Denicheurs / je pense a ajouter : si vous validez ;-)
      // Un petit P "Already registered" avec un A vers "Login"
    );
  }
}
