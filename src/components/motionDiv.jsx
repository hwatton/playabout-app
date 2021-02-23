import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

{
  /* just here to play about with basic ideas in framer motion */
}
const Rotate = () => {
  const [isActive, setIsActive] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const constraintsRef = useRef();

  const variant = {
    active: {
      rotate: 360,
      scale: 1,
      opacity: 1
    },
    inactive: {
      rotate: 0,
      scale: 1,
      opacity: 0
    }
  };

  const [dragColour, setDragColour] = useState("white");

  return (
    <div className="md-holder">
      <br />
      <button
        className="Button motion-button"
        onClick={() => setIsActive(!isActive)}
      >
        {isActive ? "Drag it!" : "Find it!"}
      </button>
      <motion.div
        className="motionDiv"
        variants={variant}
        animate={isActive ? "active" : "inactive"}
      >
        <div
          className="constrainingDiv"
          ref={constraintsRef}
          style={{
            margin: "10%",
            height: "80%",
            width: "80%"
          }}
        >
          <motion.div
            style={{
              left: 50,
              width: 150,
              height: 150,
              borderRadius: 30,
              backgroundColor: dragColour,
              cursor: "grab",
              alignItems: "center"
            }}
            drag
            dragConstraints={constraintsRef}
            dragElastic={0.4}
            onDrag={() => {
              setIsFinished(false);
              setDragColour("red");
            }}
            onDragEnd={() => {
              setIsFinished(true);
              setDragColour("white");
              setTimeout((d) => {
                setIsFinished(false);
              }, 2000);
            }}
            whileTap={{ cursor: "grabbing" }}
          >
            <div>
              <p
                style={{
                  color: "black"
                }}
              >
                {isFinished ? "Thanks for that." : null}
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Rotate;
