import { useState } from "react";
import BarChart from "./barChart.jsx"
import LineGraph from "./linegraph.jsx"

//work out how to pass the value change back up to the state

function InterGraph(props) {
  const startingData = [];
  const lineColour = Math.random()

  for (let i = 0; i < 10; i++) {
    startingData.push({
      cv: Math.floor(Math.random() * 10),
      id: "id_" + i,
      colourNumber: Math.random(),
      lineColour: lineColour
    });
  }

  const [data, setData] = useState(startingData);

  function newBallsPlease(e) {
    //console.log(event.target.id);

    let obj = data.find((x) => x.id === e.target.id);
    let index = data.indexOf(obj);
    let dt = [...data];
    dt[index].cv = parseInt(e.target.value);

    setData(dt);

  }

  const peez = data.map((item, i) => (
    <input
      className="graphInput"
      id={item.id}
      key={item + "_" + i}
      onChange={(e) => newBallsPlease(e)}
      type="number"
      step="1"
      value={item.cv}
    ></input>
  ));

  return (<div className="interactiveGraph">
    <div className="inputHolder">{peez}</div>
    <div className="chartHolder">
    <BarChart testInfo={data}/>
    <LineGraph testInfo={data}/>
    </div>
    </div>);
}

export default InterGraph;
