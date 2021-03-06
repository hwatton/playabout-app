import { motion } from "framer-motion";
import * as d3 from "d3";
import "./about.css"

export default function Flashy() {
  let cols = [];

  for (let i = 0; i < 20; i++) {
    cols.push(d3.interpolateRainbow(i / 20));
  }

  const borderStyle = {
      "borderStyle" : "solid",
      "borderWidth" : "2px",
      "width" : "200px",
      "borderRadius" : "5px",
      "color": "white"
  }

  const divStyle = {
      "alignItems" : "center",
      "width" : "100%"
  }

  return (
    <div className="App">
        <div className="fullSizeBadBoy"
        style={divStyle}>
      <motion.h1
        animate={{
          color: cols
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 80
        }}
      >
        ANIMATING TITLE
      </motion.h1>
      <br/>
      <motion.div
        className="flashy-border"
        style={borderStyle}
        animate={{
            
          borderColor: cols
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 80
        }}
      >
        <h2>done gone put a flashy border on it.</h2>
      </motion.div>

      </div>
    </div>
  );
}
