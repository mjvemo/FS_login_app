import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Register from "./Components/Register";
import Login from "./Components/Login";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/login">Iniciar Sesión</Link>
              <br />
              <Link to="/register">Registrarse</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/"
            element={
              <div>
                <h1>Welcome </h1>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
