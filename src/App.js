import React from "react";
import Main from "./pages/main";

import styles from "./styles/App.module.css";

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link"; 

function App() {
  return (
    <Router>
      <nav className={styles.navBar}>
        <ul>
          <li><Link to="/#about">About</Link></li>
          <li><Link to="/#tickets">Tickets</Link></li>
          <li><Link to="/#bands">Bands</Link></li>
          <li><Link to="/#gallery">Gallery</Link></li>
          <li><Link to="/#team">Meet the Team</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
