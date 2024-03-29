import "./App.css";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/Navbar";
import Login from "./components/Login";
import Admin from "./components/Admin";
import Profil from "./components/Profil";
import Signup from "./components/Signup";
import Error404 from "./components/Error404";
import ProductPage from "./components/ProductPage";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/users/signup" component={Signup} />
        <Route path="/users/login" component={Login} />
        <Route path="/admin" component={Admin} />
        <Route path="/users/:id" component={Profil} />
        <Route path="/products/:id" component={ProductPage} />
        <Route path="*" component={Error404} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
