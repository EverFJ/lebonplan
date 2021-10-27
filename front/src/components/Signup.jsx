import React, { Component } from "react";

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      surName: "",
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  render() {
    return (
      <div className="SignUpForm">
        <form onSubmit={this.handleSubmit}>
          <h1>Please Sign Up</h1>

          <div className="form-group firstName">
            <label>First name</label>
            <input
              name="firstName"
              type="text"
              className="form-control"
              placeholder="First name"
              value={this.state.firstName}
              onChange={(e) => this.setState({ firstName: e.target.value })}
            />
          </div>

          <div className="form-group surName">
            <label>Surname</label>
            <input
              name="surName"
              type="text"
              className="form-control"
              placeholder="Surname"
              value={this.state.surName}
              onChange={(e) => this.setState({ surName: e.target.value })}
            />
          </div>

          <div className="form-group userName">
            <label>Username</label>
            <input
              name="userName"
              type="text"
              className="form-control"
              placeholder="Username"
              value={this.state.userName}
              onChange={(e) => this.setState({ userName: e.target.value })}
            />
          </div>

          <div className="form-group userEmail">
            <label>Email</label>
            <input
              name="email"
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>

          <div className="form-group userPassword">
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
          <div className="form-group userPassword">
            <label>Confirm password</label>
            <input
              name="confirmPassword"
              type="password"
              className="form-control"
              placeholder="Confirm your password"
              value={this.state.confirmPassword}
              onChange={(e) =>
                this.setState({ confirmPassword: e.target.value })
              }
            />
          </div>

          <button type="submit" className="btn btn-cyan-900 btn-lg btn-block">
            Register
          </button>
        </form>
      </div>
      // Sofiane => Team Denicheurs / je pense a ajouter : si vous validez ;-)
      // Un petit P "Already registered" avec un A vers "Login"
    );
  }
}
