import { useState } from "react";
import GridHolder from "./gridHolder.jsx"
import { SketchPicker } from 'react-color';


function Squares() {
 
  const rNum = 20;
  const num = rNum * rNum * 2;

  /*
for now: 
grid is hardcoded 20 rows by 40 columns.
*/
const [dV, setDV] = useState(
        [{name: "rows", value: 20, step: 1, id: "id_rw"},
        {name: "cols", value: 40, step: 1, id: "id_cl"},
        {name: "deviance", value: 2, step: 1, id: "id_dv"},
        {name: "texture", value: 0, step: 1, id: "id_tx"}]
)

const rex = Math.floor(Math.random()*dV[0].value)
const rey = Math.floor(Math.random()*dV[1].value)

const [location, setLocation] = useState([rex, rey]);

  function newLocation() {
    let nX = Math.floor(Math.random()*dV[0].value)
    let nY = Math.floor(Math.random()*dV[1].value)
    setLocation([nX, nY]);
  }
 

  function controlHandler(e){
// redo dV to be an array of objects for each input.
// then .map them out.
// use steps and ids (like in other components to target the state change)

let obj = dV.find((x) => x.id === e.target.id);
    let index = dV.indexOf(obj);
    let dt = [...dV];
    dt[index].value = e.target.value

    if(e.target.id == "id_cl") {
      
        let string = (2 + e.target.value*24) + "px"
        setDivWidth(string)
    }

    setDV(dt);
  }

  let startingWidth = (2 + dV[1].value*24) + "px"

  const [divWidth, setDivWidth] = useState(2 + dV[1].value*24)
//the above needs to be passed to the div as a prop

/* control panel */

  const controlPanel = dV.map((item)=>{
      let kee = "box_" + item.name
  
  return (
<div
key={kee}
style={{
    paddingLeft: "8px",
    paddingRight: "8px",
}}>
<p  className="dataTextDark">{item.name}</p>
<input
        className="graphInputDark"
        id={item.id}
        onChange={(e) => controlHandler(e)}
        type="number"
        step={item.step}
        value={item.value}
      ></input>

</div>
  )

  })

  const [showPicker, setShowPicker] = useState(true)


  return (
      <div>
        {showPicker && <div style={{
          position: "fixed",
          top: "200px",
          left: "50%",
          opacity: "90%"
        }}><SketchPicker
        width={400}/></div>}
          <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            margin: "20px",
            justifyContent: "center"}}>
{controlPanel}
             
          </div>
   
    <GridHolder 
    data={dV}
    focus={location}
    width={divWidth}
    />
    <button
             style={{
                 padding: "2px"
             }}
             onClick={newLocation}
             >New Location Please</button>
   
    </div>
  );
}



export default Squares;
