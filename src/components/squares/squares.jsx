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
const [dV, setDV] = useState(
        {rows: [20,1],
        cols: [40,1],
        deviance: [2,0.2],
        texture: [0,0.1]}
)

const [data, setData] = useState(sqData(
      dV.rows[0],
      dV.cols[0],
      dV.deviance[0],
      dV.texture[0]
      ));

  function newData() {
    let nD = sqData(dV.rows,
        dV.cols[0],
        dV.deviance[0],
        dV.texture[0]);
    setData(nD);
  }

  function controlHandler(e){
// redo dV to be an array of objects for each input.
// then .map them out.
// use steps and ids (like in other components to target the state change)
  }

  for (let i = 0; i < num; i++) {
    grid.push(<Square data={data[i]}  key={"key_" + i} />);
  }

  const divWidth = 2 * (rNum * 24 + 2);

  let dEntries = Object.entries(dV)


  const controlPanel = dEntries.map((item,i)=>{
  return (
<div
style={{
    paddingLeft: "8px",
    paddingRight: "8px",
}}>
<p  className="dataTextDark">{item[0]}</p>
<input
        className="graphInputDark"
        key={"box_" + i}
        onChange={(e) => console.log(e.target.value)}
        type="number"
        step={item[1][1]}
        value={item[1][0]}
      ></input>

</div>
  )

  })


  return (
      <div>
          <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            margin: "20px",
            justifyContent: "center"}}>
{controlPanel}
             
          </div>
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
    <button
             style={{
                 padding: "2px"
             }}
             onClick={newData}
             >New Location Please</button>
    </div>
  );
}

function Square(props) {
  return (
    <div
    
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
