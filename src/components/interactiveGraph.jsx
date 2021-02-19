import { useState } from "react";

//work out how to pass the value change back up to the state

function InterGraph(props) {
  const startingData = [];

  for (let i = 0; i < 10; i++) {
    startingData.push({ cv: Math.floor(Math.random() * 10), id: "id_" + i });
  }

  const [data, setData] = useState(startingData);

  function newBallsPlease({ target }) {
    console.log(event);
    let dt = data;
    for (let i = 0; i < 10; i++) {
      if (dt.id == target.id) {
        dt[i].cv = event.data;
      }
    }
    setData(dt);
  }

  const peez = data.map((item, i) => (
    <input
      id={item.id}
      key={item + "_" + i}
      onChange={newBallsPlease}
      type="text"
      value={item.cv}
    ></input>
  ));

  return <div>{peez}</div>;
}

export default InterGraph;
