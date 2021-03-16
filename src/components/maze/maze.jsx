import { useState } from "react"
import MazeGrid from "./mazeGrid.jsx"
import "./mazeStyle.css"

function Maze() {



   

    const handleVersionUpdate = ()=>{

        let current = subText.version + 1


        setSubText({
            cells:size,
        version: current})
    }

    function handleNumber(val) {
        setSize(val)

    }

    const [size,setSize] = useState(8)

    const [subText, setSubText] = useState({
        cells:size,
    version: 0}
        )

    return (
        <div className="mazeTopContainer">
            <br/>
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            backgroundColor: "white",
            justifyContent: "center"
        }}>
            <div>Enter number of cells here:
                <input className="numberInput" type="number" step="1" value={size} min="2" max="50" onChange={(e)=>{handleNumber(e.target.value)}}/>
               </div>
             <button
                className="enterButton"
                onClick={()=>{handleVersionUpdate()}}>new Maze please</button>
            
          
        </div>
        <br/>
        <MazeGrid
            cellNumber={subText.cells}
            svgSize={500}
            version={subText.version}
            />
            <br/>
            <h2>More info:</h2>
            <p>The maze is limited to 50 x 50 cells as it can be very slow to render in a browser as it gets larger, although the algorithm does work fine.</p>
            <p>It is created programmatically each time using a Kruskal's Algoritm based method.
                <p>One of the positives of this method is the randomised nature of the paths layout. The drawback is that the solution might be very easy! It might also be extremely difficult!</p>
            </p>
        </div>
    )
}

export default Maze