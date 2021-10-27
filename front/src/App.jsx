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

import "bootstrap/dist/css/bootstrap.css";

// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users/login" component={Login} />
        <Route exact path="/users/signup" component={Signup} />
        <Route exact path="/admin" component={Admin} />
        <Route path="/users/:id" component={Profil} />
        <Route path="*" component={Error404} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
