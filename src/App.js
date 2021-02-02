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
  const [data, setData] = useState(dataMaker(40));

  function reloadData() {
    let d = dataMaker(40);
    setData(d);
  }

  /* next -  throw some functionality in to edit the d3 bar data */

  return (
    <div className="App">
      <Thingy className="Thingy" text="two or three" />
      <Normal text="Jam Sandwiches, 10 for a pound" height="100" width="200" />
      <D3BarChart clicky={reloadData} data={data} width={400} height={50} />
      <Rotate />
      <PopUpData />
      <Rotate />
    </div>
  );
}

export default App;
