import logo from "./logo.svg";
import "./App.css";
import Thingy from "./components/playground.jsx";
import Board from "./components/board.jsx";
import Normal from "./components/normal.jsx";
import D3BarChart from "./components/hookD3Component.jsx";

function App() {
  let rectData = [];
  for (let i = 0; i < 40; i++) {
    let newY = 20 + Math.random() * 20 - 10;
    let newH = 30 - newY;

    rectData.push({
      x: i * 11,
      y: newY,
      height: newH,
      width: 10
    });
  }

  /* next -  throw some functionality in to edit the d3 bar data */

  return (
    <div className="App">
      <Thingy className="Thingy" text="two or three" />
      <Normal text="Jam Sandwiches, 10 for a pound" height="100" width="200" />
      <D3BarChart data={rectData} />

      <Board knightPosition={[4, 7]} />
    </div>
  );
}

export default App;
