import { useState, useRef } from "react";
import MazeGrid from "./mazeGrid.jsx";
import "./mazeStyle.css";
import useWindowDimensions from "../windowSizeHook.js"
import { useReactToPrint } from 'react-to-print';


function Maze() {
  const handleVersionUpdate = () => {
    let current = subText.version + 1;

    setSubText({
      cells: size,
      version: current
    });
  };

  function handleNumber(val) {
    setSize(val);
  }

  const [size, setSize] = useState(8);

  const [svgSize, setSvgSize] = useState(500)

  let winWid = useWindowDimensions()

if (winWid < 499) {
   setTimeout(()=>{
       setSvgSize(360)
   },1000)
}else { if(winWid > 750) {
    setTimeout(()=>{
        setSvgSize(600)
    },1000)
}else{
    setTimeout(()=>{
        setSvgSize(500)
    },1000)
}
}


    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: ()=> componentRef.current,
    })



  const [subText, setSubText] = useState({
    cells: size,
    version: 0
  });

  return (
    <div className="mazeTopContainer">
        <h1>Maze Generator</h1>
      <div className="mazeControl">
        <p> Enter number of cells here:

        <input
          className="numberInput"
          type="number"
          step="1"
          value={size}
          min="2"
          max="50"
          onChange={(e) => {
            handleNumber(e.target.value);
          }}
        /></p>
        <button
          className="enterButton"
          onClick={() => {
            handleVersionUpdate();
          }}
        >
          new Maze please
          </button>
        <button 
        onClick={handlePrint} 
        className="printButton"
        >print this maze</button>
      </div>

      <div className="Maze"
      ref={componentRef}>
        <MazeGrid
          cellNumber={subText.cells}
          svgSize={svgSize}
          version={subText.version}
        />
    
        <div  className="creditBit"
        style={{width: svgSize}}>
        <p
        >maze created at <a href="/maze">harrywatton.com</a></p></div>
      </div>
      <div className="mazeInfo"
      style={{
          width: svgSize
      }}>
         
        <h2>More info:</h2>
        <br/>
        <p>
          The maze is limited to 50 x 50 cells as it can be very slow to render
          in a browser as it gets larger, and it doesn't read very well either with too many cells.
        </p>
        <br/>
        <p>
          It is created programmatically each time using a Kruskal's Algorithm
          based method. Read more <a href="https://en.wikipedia.org/wiki/Maze_generation_algorithm" target="_blank">here.</a>
        </p>
        <br/>
        <p>
          One of the positives of this method is the randomised nature of the
          paths layout, which makes it look quite hectic at first glance. A potential drawback however, is that it tends to create lots of little dead-ends which can be easy to navigate around when solving. 
        </p>
        <br/>
        <p>The mazes created on this page are generated each time and are free to use. If you'd like to borrow/improve/adapt my algorithm for your own project, please get in touch via my contact page. Thanks!</p>
      </div>
    </div>
  );
}

export default Maze;
