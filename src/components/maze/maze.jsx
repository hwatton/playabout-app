import { useState } from "react"
import MazeGrid from "./mazeGrid.jsx"

function Maze() {



    const handleForm = (e)=>{
        setSubText(size)
    }

    function handleNumber(val) {
        setSize(val)

    }

    const [size,setSize] = useState(25)

    const [subText, setSubText] = useState(size)

    return (
        <div className="mazeTopContainer">
            <br/>
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            backgroundColor: "white",
            justifyContent: "center"
        }}>
            
                <input type="number" step="1" value={size} max="50" onChange={(e)=>{handleNumber(e.target.value)}}/>
                
                <div style={{
                    width: "30px",
                    height: "10px",
                    backgroundColor: "red"
                }}
                onClick={(e)=>{handleForm(e)}}></div>
            
          
        </div>
        <p>big note: change input. greater than 50 ish is going to crash browsers and is illegible.</p>
        <MazeGrid
            size={size}
            svgSize={500}/>
        </div>
    )
}

export default Maze