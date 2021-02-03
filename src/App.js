import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Thingy from "./components/playground.jsx";
import Board from "./components/board.jsx";
import Normal from "./components/normal.jsx";
import D3BarChart from "./components/hookD3Component.jsx";
import Rotate from "./components/motionDiv.jsx";
import PopUpData from "./components/d3popUpdiv.jsx";
import dataMaker from "./components/functions.js";

function App() {
  let onOrOff = {
    thing: true,
    normal: true,
    d3: true,
    rotate: true,
    popUp: true
  };

  const [load, changeLoad] = useState(onOrOff);
  const [data, setData] = useState(dataMaker(40));

  function reloadData() {
    let d = dataMaker(40);

    setData(d);
  }

  function randomLoader() {
    let rB = Math.random() < 0.5;

    let newObj = {};

    for (let [k, v] of Object.entries(load)) {
      newObj[k] = Math.random() < 0.5;
    }
    changeLoad(newObj);
  }

  /* next -  throw some functionality in to edit the d3 bar data */

  return (
    <div className="App">
      <div className="topBit">
        <button onClick={randomLoader}>LOAD random conditional</button>
      </div>
      <div className="secondBit">
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
        {load.d3 && <Rotate />}
        {load.d3 && <PopUpData data={dataMaker(10)} />}
        <Rotate />
      </div>
    </div>
  );
}

export default App;
