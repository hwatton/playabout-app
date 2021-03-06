import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Mainpage from "./App.js";
import RouterNavBar from "./routerNavBar.jsx";
import Dthreediv from "./components/d3div.jsx";
import Flashy from "./components/about/about.jsx";

export default function App() {
  const [showd3div, setd3div] = useState(true);


  return (
    <div>
      <Router>
        <div>
          <RouterNavBar />

          <Switch>
            <Route 
            path="/about">
              <div className="hold-about">
                <Flashy />
              </div>
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
      <Dthreediv show={showd3div} />
    </div>
  );
}

function Contact() {
  return <h2>contact me fool</h2>;
}

function About() {
  return <h2>About me fool</h2>;
}
