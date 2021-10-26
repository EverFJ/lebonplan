// Librarys
import React, { Component } from "react";
import "./App.css";
import bootstrap from "bootstrap";

// Componants
import Home from "./components/Home";
import Login from "./components/Login";
import Admin from "./components/Admin";
import Profil from "./components/Profil";
import Signup from "./components/Signup";
import Error404 from "./components/Error404";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Bienvenue sur le bon plan</h1>
      </div>
    );
  }
}
