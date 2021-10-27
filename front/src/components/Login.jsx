import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ email: e.target.value });
    console.log(e.target.value);
  }

  handleSubmit(e) {
    alert("email submitted :" + this.state.value);
    e.preventDefault();
    // console.log(e);
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <h1>Log in</h1>

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
