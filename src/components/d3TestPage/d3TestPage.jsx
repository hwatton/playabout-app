
import LineBlock from "./animLines.jsx"
import { useState } from "react"
import {motion, AnimatePresence} from "framer-motion"

function DthreeTestPage(props) {

    const clippedStyleTriangle = {
        margin: "10px",
        clipPath: "polygon(0% 0%, 50% 100%, 100% 0%, 0% 0%)",
        transform: "rotate(180deg)"
      }

      const clippedStylePentagon = {
        margin: "10px",
        clipPath: "polygon(18% 0%, 0% 62%, 50% 100%, 100% 62%, 82% 0%, 18% 0%)",
        transform: "rotate(180deg)"
      }

      const clippedStyleCircle = {
        margin: "10px",
        clipPath: "circle(50% at 50% 50%)",
        transform: "rotate(180deg)"
      }

    const sum = ((300)*6 + 1000 + 700 + 3000) + " piunds"


 const [showLogo, setShowLogo] = useState(false)

 function handleMouseIn() {
   console.log("in")
   setShowLogo(true)
 }

 function handleMouseOut() {
  console.log("out")
 setTimeout(() => {
  setShowLogo(false)
 }, 2500);
  
  
  
}



    return (
        <div style={{
            backgroundColor: "black"
        }}>
          
        <div 
        style={clippedStyleTriangle}
        onMouseLeave={()=>{handleMouseOut()}}>
          <AnimatePresence>
        {showLogo &&
            <motion.div 
            initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
            
            style={{
        position: "fixed",
        top: "-8px",
        left: "21px",
        fontSize: "40px",
        color: "white",
        transform: "rotate(180deg)"
        }}>hW</motion.div> }
        </AnimatePresence>
            <LineBlock
            mouseIn={handleMouseIn}
            mouseOut={handleMouseOut}
            colours={["#ff0000", "#000000"]}/>
    </div>
    <div style={clippedStylePentagon}>
            <LineBlock
            colours={["#ff00ff", "#bb00bb"]}/>
    </div>
    <div style={clippedStyleCircle}>
            <LineBlock
            colours={["#22eecc", "#00aa66"]}/>
    </div>
    <div style={clippedStylePentagon}>
            <LineBlock
            colours={["#dd0000", "#bb00ff"]}/>
    </div>
    <p style={{color: "white"}}>{sum}</p>

    </div>
    )
}


export default DthreeTestPage