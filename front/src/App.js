import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Admin from "./components/Admin";
import Profil from "./components/Profil";
import Signup from "./components/Signup";
import Error404 from "./components/Error404";

function App() {
  return (
    <div className="App">
      <div className="registerconteiner">
        <h1 className="Signup">Signup</h1>
        <form className="Signup-register">
        <input
          className="TextInput"
          type="text"
          name="name"
          placeholder="Name"
        />
      </form>
      </div>
    </div>
  );
}

export default App;
