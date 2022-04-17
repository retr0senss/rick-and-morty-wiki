import "./App.css";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Characters from "./components/Characters";

import Home from "./components/Home";
import Logo from "./logo.png";

function App() {
  return (
    <Router>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a href="/" className="navbar-brand">
            <img src={Logo} alt="logo" width="150" height="70" />
          </a>

          <div className="d-flex">
            <button className="btn btn-dark">
              <Link className="links" to="/characters">
                Characters
              </Link>
            </button>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
      </Routes>
    </Router>
  );
}

export default App;
