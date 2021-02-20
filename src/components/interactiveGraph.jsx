import { useState } from "react";

//work out how to pass the value change back up to the state

function InterGraph(props) {
  const startingData = [];

  for (let i = 0; i < 10; i++) {
    startingData.push({
      cv: Math.floor(Math.random() * 10),
      id: "id_" + i
    });
  }

  const [data, setData] = useState(startingData);

  function newBallsPlease(e) {
    //console.log(event.target.id);

    let obj = data.find((x) => x.id === event.target.id);
    let index = data.indexOf(obj);
    let dt = [...data];
    dt[index].cv = event.target.value;

    setData(dt);
    console.log(data);
  }

  const peez = data.map((item, i) => (
    <input
      className="graphInput"
      id={item.id}
      key={item + "_" + i}
      onChange={(e) => newBallsPlease(e)}
      type="text"
      value={item.cv}
    ></input>
  ));

  return <div className="inputHolder">{peez}</div>;
}

export default InterGraph;
