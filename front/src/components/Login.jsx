import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = { email: "", password: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    const apiUrl = "http://localhost:8000";
  }

  handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:8000" + "/users/login", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    });
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <h1>Login</h1>

          <div className="form-group">
            <label>Email adress</label>
            <input
              name="email"
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              name="password"
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
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
