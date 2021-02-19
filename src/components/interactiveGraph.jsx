import { useState } from "react";

//work out how to pass the value change back up to the state

function InterGraph(props) {
  const [data, setData] = useState([5, 7, 5]);

  function newBallsPlease() {
    let dt = [];
    for (let i = 0; i < 10; i++) {
      dt.push(Math.floor(Math.random() * 10));
    }
    setData(dt);
  }

  const peez = data.map((item) => (
    <input onChange={newBallsPlease} type="text" value={item}></input>
  ));

  return <div>{peez}</div>;
}

export default InterGraph;
