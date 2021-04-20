import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Mainpage from "./App.js";
import RouterNavBar from "./routerNavBar.jsx";
import Dthreediv from "./components/d3div.jsx";
import Flashy from "./components/about/about.jsx";
import Squares from "./components/squares/squares.jsx";
import ContactBox from "./components/contact/contact.jsx";
import Maze from "./components/maze/maze.jsx"
import DthreeTestPage from "./components/d3TestPage/d3TestPage.jsx"

export default function App() {
  const [showd3div, setd3div] = useState(true);

  return (
    <div>
      <Router>
        <div>
          <RouterNavBar />

          <Switch>
          <Route path="/animationtestpage">
              <div className="hold-about">
                <DthreeTestPage />
              </div>
            </Route>
            <Route path="/about">
              <div className="hold-about">
                <Flashy />
              </div>
            </Route>
            <Route path="/maze">
              <div className="hold-maze">
                <Maze/>
              </div>
            </Route>
            <Route path="/squares">
              <div className="hold-squares">
                <Squares />
              </div>
            </Route>
            <Route path="/contact">
              <ContactBox isVisible />
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


