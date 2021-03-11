import sqData from "./squaredata.js";
import { useState } from "react";

function Squares() {
  let grid = [];
  const rNum = 20;
  const num = rNum * rNum * 2;

  /*
for now: 
grid is hardcoded 20 rows by 40 columns.
*/

  const [data, setData] = useState(sqData());

  function newData() {
    let nD = sqData();
    setData(nD);
  }

  for (let i = 0; i < num; i++) {
    grid.push(<Square data={data[i]} clickFunc={newData} key={"key_" + i} />);
  }

  const divWidth = 2 * (rNum * 24 + 2);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        minWidth: divWidth,
        maxWidth: divWidth,
        margin: "10px"
      }}
    >
      {grid}
    </div>
  );
}

function Square(props) {
  return (
    <div
      onClick={props.clickFunc}
      style={{
        width: "20px",
        height: "20px",
        margin: "2px",
        backgroundColor:
          "rgb(" + (256 - props.data) + ", 0, " + (256 - props.data / 2) + ")"
      }}
    ></div>
  );
}

export default Squares;
