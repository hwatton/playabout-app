import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Mainpage from "./App.js";
import styles from "./routerNav.css";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul className="router-nav-holder">
            <li className="router-nav-link">
              <Link to="/" className="navText">
                Main page
              </Link>
            </li>
            <li className="router-nav-link">
              <Link className="navText" to="/about">
                About
              </Link>
            </li>
            <li className="router-nav-link">
              <Link className="navText" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Mainpage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Contact() {
  return <h2>contact me fool</h2>;
}

function About() {
  return <h2>About me fool</h2>;
}
