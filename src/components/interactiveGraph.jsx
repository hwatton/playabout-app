import { useState } from "react";
import BarChart from "./graphs/barChart.jsx";
import LineGraph from "./graphs/linegraph.jsx";
import PieChart from "./graphs/pieChart.jsx";

//work out how to pass the value change back up to the state

function InterGraph(props) {
  const startingData = [];
  const lineColour = Math.random();
  const dataLength = 10;
  let colStep = 1 / (dataLength - 1);

  for (let i = 0; i < dataLength; i++) {
    startingData.push({
      cv: Math.floor(Math.random() * 10),
      id: "id_" + i,
      colourNumber: colStep * i,
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
    <div>
      <p className="dataText">Data:{i + 1}</p>
      <input
        className="graphInput"
        id={item.id}
        key={item + "_" + i}
        onChange={(e) => newBallsPlease(e)}
        type="number"
        step="1"
        value={item.cv}
      ></input>
    </div>
  ));

  return (
    <div className="interactiveGraph">
      <div className="inputHolder">{peez}</div>
      <div className="chartHolder">
        <BarChart testInfo={data} />
        <LineGraph testInfo={data} />
        <PieChart testInfo={data} />
      </div>
    </div>
  );
}

export default InterGraph;
