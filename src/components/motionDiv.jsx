import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

{
  /* just here to play about with basic ideas in framer motion */
}
const Rotate = () => {
  const [isActive, setIsActive] = useState(false);
  const constraintsRef = useRef()

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

  const [dragColour, setDragColour] = useState("white")

  return (
    <div className="md-holder">
      <br/>
      <button 
      className="Button motion-button"
      onClick={() => setIsActive(!isActive)}>find it!</button>
      <motion.div
        className="motionDiv"
        variants={variant}
        
        animate={isActive ? "active" : "inactive"}
      >
        
        <div className="constrainingDiv"
      ref={constraintsRef}
      style={{
        margin: "10%",
        height: "80%",
        width: "80%",
      }}>
        
        <motion.div
      style={{
        left: 50,
        width: 150,
        height: 150,
        borderRadius: 30,
        backgroundColor: dragColour,
        cursor: "grab"
      }}
      drag
      dragConstraints={constraintsRef} 
      dragElastic={0.4}
      onDrag = {(event, info)=>{
        console.log(event)
        console.log(info)
        setDragColour("red")
      }}
      onDragEnd = {(event, info)=>{
        console.log(event)
        console.log(info)
        setDragColour("white")
      }}

      whileTap={{ cursor: "grabbing" }}
    /></div>
      </motion.div>
      
    </div>
  );
};

export default Rotate;
