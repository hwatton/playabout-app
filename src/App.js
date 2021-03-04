import "./App.css";
import React, { useState } from "react";
import Thingy from "./components/playground.jsx";
import Normal from "./components/normal.jsx";
import D3BarChart from "./components/hookD3Component.jsx";
import PopUpData from "./components/d3popUpdiv.jsx";
import InterGraph from "./components/interactiveGraph.jsx";
import dataMaker from "./components/functions.js";
import StyledDiv from "./components/styleD/styledWithTailwind.jsx";
import Rotate from "./components/motionDiv.jsx";
import Navbar from "./components/navbar/navbar.jsx";

function MainPage() {
  let onOrOff = {
    thing: false,
    normal: true,
    d3: true,
    rotate: true,
    popUp: true,
    styledBit: true,
    iGraph: false,
    navBar: false
  };

  const [load, changeLoad] = useState(onOrOff);
  const [data, setData] = useState(dataMaker(40));

  function reloadData() {
    let d = dataMaker(40);

    setData(d);
  }

  function randomLoader() {
    let newObj = {};

    for (let [k, v] of Object.entries(load)) {
      newObj[k] = Math.random() < 0.5;
    }
    changeLoad(newObj);
  }

  function navLoader() {
    let turnemOff;

    if (!load.navBar) {
      turnemOff = {
        thing: true,
        normal: true,
        d3: true,
        rotate: true,
        popUp: true,
        styledBit: true,
        iGraph: false,
        navBar: true
      };
    } else {
      turnemOff = {
        thing: true,
        normal: true,
        d3: true,
        rotate: true,
        popUp: true,
        styledBit: true,
        iGraph: false,
        navBar: false
      };
    }
    changeLoad(turnemOff);
  }

  function graphLoader() {
    let turnemOff;

    if (!load.iGraph) {
      turnemOff = {
        thing: false,
        normal: false,
        d3: false,
        rotate: false,
        popUp: false,
        styledBit: false,
        iGraph: true,
        navBar: false
      };
    } else {
      turnemOff = {
        thing: true,
        normal: true,
        d3: true,
        rotate: true,
        popUp: true,
        styledBit: true,
        iGraph: false,
        navBar: false
      };
    }
    changeLoad(turnemOff);
  }

  /* next -  throw some functionality in to edit the d3 bar data */

  return (
    <div className="App">
      <div
        className="topBit"
        style={{
          backgroundColor: "#ffccff",
          borderRadius: "5px",
          borderStyle: "solid",
          borderWidth: "1px",
          border: "red"
        }}
      >
        <button onClick={randomLoader}>LOAD random conditional</button>
        <button className="graphBtn" onClick={graphLoader}>
          {load.iGraph ? "Unload Graph Component" : "Load Interactive Graph"}
        </button>
        <button className="graphBtn" onClick={navLoader}>
          {load.navBar ? "Unload Navbar" : "Load Navbar"}
        </button>
      </div>
      <div className="secondBit">
        {load.navBar && <Navbar />}
        {load.thing && <Thingy className="Thingy" text="two or three" />}
        {load.normal && (
          <Normal
            text="Jam Sandwiches, 10 for a pound"
            height="100"
            width="200"
          />
        )}
        {load.d3 && (
          <D3BarChart clicky={reloadData} data={data} width={400} height={50} />
        )}

        {load.d3 && <PopUpData data={dataMaker(10)} />}
        {load.styledBit && (
          <StyledDiv
            clickAction={randomLoader}
            ridiculousMessage="checkOut at the checkout please"
          />
        )}
        {load.iGraph && <InterGraph />}
        {load.rotate && <Rotate />}
      </div>
    </div>
  );
}

export default MainPage;
