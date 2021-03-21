import SquareGrid from "./squareGrid.jsx"

function GridHolder(props) {
console.log(props.width)

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