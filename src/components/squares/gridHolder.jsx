import SquareGrid from "./squareGrid.jsx"

function GridHolder(props) {

let thisWidth = props.width
return (
<div
      style={{
        width: thisWidth,
        display: "flex",
        flexWrap: "wrap",
        margin: "10px"
      }}
    >
     <SquareGrid
     sqdata={props.data}
     targets={props.focus}
     /> 
    </div>
)
}

export default GridHolder