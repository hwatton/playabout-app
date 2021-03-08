import { motion } from "framer-motion";
import "./about.css";
import rainbowCols from "../../components/rainbowCols.js";

export default function Flashy() {
  const borderStyle = {
    borderStyle: "solid",
    borderWidth: "2px",
    width: "200px",
    borderRadius: "5px",
    color: "white"
  };

  const divStyle = {
    alignItems: "center",
    width: "100%"
  };

  return (
    <div className="App">
      <div className="fullSizeBadBoy" style={divStyle}>
        <motion.h1
          animate={{
            color: rainbowCols
          }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 80
          }}
        >
          ANIMATING TITLE
        </motion.h1>
        <br />
        <motion.div
          className="flashy-border"
          style={borderStyle}
          animate={{
            borderColor: rainbowCols
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
