import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <div className="Login">
        <h1>Login</h1>
        <form class="dropdown-menu p-4">
          <div className="mb-3">
            <label for="exampleDropdownFormEmail2" class="form-label">
              email
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleDropdownFormEmail2"
              placeholder="email@example.com"
            />
          </div>
          <div class="mb-3">
            <label for="exampleDropdownFormPassword2" class="form-label">
              Mot de passe
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleDropdownFormPassword2"
              placeholder="Password"
            />
          </div>
          <div class="mb-3">
            <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="dropdownCheck2"
              />
              <label class="form-check-label" for="dropdownCheck2">
                se souvenir de moi
              </label>
            </div>
          </div>
          <button type="submit" class="btn btn-primary">
            Se connecter
          </button>
        </form>
      </div>
    );
  }
}
