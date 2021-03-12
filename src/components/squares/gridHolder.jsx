import SquareGrid from "./squareGrid.jsx"

function GridHolder(props) {
console.log(props.width)
return (
<div
      style={{
        display: "flex",
        flexWrap: "wrap",
        minWidth: props.width,
        maxWidth: props.width,
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