import D3BarChart from "./hookD3Component.jsx";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

function PopUpData(props) {
  const [isMounted, setIsMounted] = React.useState(false);

  const defaultState = {
    opacity: 0,
    scale: 0.6
  };

  let rectDataNew = [];
  for (let i = 0; i < 5; i++) {
    let newY = 20 + Math.random() * 20 - 10;
    let newH = 50 - newY;

    rectDataNew.push({
      x: i * 22,
      y: newY,
      height: newH,
      width: 20
    });
  } // for i

  return (
    <div className="container">
      <button onClick={() => setIsMounted(!isMounted)}>
        {`${isMounted ? "Unmount d3 Chart" : "Mount d3 Chart"} Element`}
      </button>
      <AnimatePresence>
        {isMounted && (
          <motion.div
            initial={defaultState}
            exit={defaultState}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 3600
            }}
          >
            <D3BarChart data={props.data} width={120} height={30} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default PopUpData;
