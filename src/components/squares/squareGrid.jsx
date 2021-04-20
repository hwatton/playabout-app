import sqData from "./squaredata.js";

function SquareGrid(props) {

    const dataSet = sqData(
        props.sqdata[0].value,
        props.sqdata[1].value,
        props.sqdata[2].value,
        props.sqdata[3].value,
        props.targets[0],
        props.targets[1]
    )

    const sqGrid = dataSet.map((el,i)=>{
        return (
            <Square data={el}  key={"key_" + i}/>
        )
    })

    return sqGrid

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

  export default SquareGrid