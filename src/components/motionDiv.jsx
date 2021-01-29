import React from "react";
import { motion } from "framer-motion";

{
  /* just here to play about with basic ideas in framer motion */
}
const Rotate = () => {
  const [isActive, setIsActive] = React.useState(false);

  const variant = {
    active: {
      rotate: 2890,
      scale: 0.9,
      opacity: 1
    },
    inactive: {
      rotate: 0,
      scale: 1,
      opacity: 0.75
    }
  };

  return (
    <motion.div
      className="motionDiv"
      variants={variant}
      onClick={() => setIsActive(!isActive)}
      animate={isActive ? "active" : "inactive"}
    >
      DIV
    </motion.div>
  );
};

export default Rotate;
