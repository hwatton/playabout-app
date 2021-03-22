import { useState } from "react";
import GridHolder from "./gridHolder.jsx"
import { SketchPicker } from 'react-color';


function Squares() {
 
  const rNum = 20;
  const num = rNum * rNum * 2;

  /*
for now: 
grid is hardcoded 20 rows by 40 columns.
to change:
map method of color inputs
grid:
this needs to only rerender the aspects that are being controlled, 
not call the whole boohoo function just for a recolor. maybe the boohoo
can be inside a useEffect, and only run when specifc controls are changed.
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


  const startingColObj = [
    {id: "colour_0", value: hslColour(), picker: false},
    {id: "colour_1", value: hslColour(), picker: false},
    {id: "colour_2", value: hslColour(), picker: false},
    {id: "colour_3", value: hslColour(), picker: false},
    {id: "colour_4", value: hslColour(), picker: false},
    {id: "colour_5", value: hslColour(), picker: false},
    {id: "colour_6", value: hslColour(), picker: false},
    {id: "colour_7", value: hslColour(), picker: false},
    {id: "colour_8", value: hslColour(), picker: false},
    {id: "colour_9", value: hslColour(), picker: false}
  ]

  const [colourArray, setColourArray] = useState(startingColObj)
  const [showPicker, setShowPicker] = useState(false)
  const [pickerVal, setPickerVal] = useState(hslColour())


  function handleColourChange(event) {

let thisID = event.target.id
console.log(thisID)
let arr = colourArray
console.log(arr)

for (let i = 0; i<arr.length; i++) {
  if (arr[i].id === thisID) {
    setPickerVal(arr[i].value)
    arr[i].picker = true
    }
}
setShowPicker(true)
setColourArray(arr)
  }

  function pickerColChange(event) {
   
    setPickerVal(event.hex)
    let arr = colourArray
    for (let i = 0; i<arr.length; i++) {
      if (arr[i].picker) {
        console.log("foundit")
       arr[i].value = event.hex}
    }
    setColourArray(arr)

  }

  function closePicker() {
setShowPicker(false)
let arr = colourArray
for (let i = 0; i<arr.length; i++) {
  if (arr[i].picker) {
  
   arr[i].picker = false}
}

setColourArray(arr)
  }


  const colourInputs = colourArray.map((x,i)=>{

      return (
        <div 
        key={x.id}
        className="input-holder">
            <button 
  onClick={(e)=> handleColourChange(e)}
  id={x.id}
  style={{
    width: "20px",
    height: "30px",
    backgroundColor: colourArray[i].value,
margin: "10px"
  }}></button>
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
            margin: "20px",
            justifyContent: "center"}}>
{colourInputs}
             
          </div>
          {showPicker && <div style={{
            position: "fixed",
            top: "310px",
            left: "50%",
            margin: "-100px"

          }}> <button
          onClick={()=>{closePicker()}}>xxxxx</button> <SketchPicker 
          color={pickerVal}
          width={200}
          onChangeComplete={(e)=> pickerColChange(e) }/></div>}
         
   
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



function hslColour(){

  const h = Math.random()*360
  const s = Math.random()*100 + "%"
  const l = Math.random()*100 + "%"


  const colour = "hsl(" + h +", " + s + ", " + l +")"


  return colour
}

export default Squares;
