import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <div className="Login">
        <form>
          <h1>Log in</h1>

          <div className="form-group">
            <label>Email adress</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
            />
          </div>
          <button type="button" className="btn-cyan-900 btn-lg btn-block">
            Login
          </button>
        </form>
      </div>

      // Sofiane => Team Denicheurs / je pense a ajouter : si vous validez ;-)
      // un input type checkbox "remember me" et un petit P "forgot password ?"
    );
  }
}
