// Librarys
import React, { Component } from "react";
import "./App.css";

// Componants
import Home from "../../components/Home";
import Login from "../../components/Login";
import Admin from "../../components/Admin";
import Profil from "../../components/Profil";
import Signup from "../../components/Signup";
import Error404 from "../../components/Error404";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Bienvenue sur le bon plan</h1>
        <Home></Home>
        <Login></Login>
        <Admin></Admin>
        <Profil></Profil>
        <Signup></Signup>
        <Error404></Error404>
      </div>
    );
  }
}
