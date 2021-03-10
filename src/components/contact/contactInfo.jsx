import {motion} from "framer-motion"
import "./contact.css";
import { useState, useRef }  from "react"

function ContactInfo() {


  const [showThing, setShowThing] = useState(false)

  const constraintsRef = useRef(null)

  return (
    <div className="contactHolder"
    ref={constraintsRef}>
      <p>Did it work this time?</p>
      <p>Did it work this time?</p>
      <p>Did it work this time?</p>
      <p>Did it work this time?</p>
      <p>Did it work this time?</p>
      <p>Did it work this time?</p>
      <p>Did it work this time?</p>
<div>
      <motion.div
      className="draggyThing"
      drag
      dragConstraints={constraintsRef}
      onHoverStart={e => {setShowThing(true)}}
      onHoverEnd={e => {setShowThing(false)}}
      >
        {showThing && <div><p>Thing!</p></div>}</motion.div></div>
    </div>
    
  );
}

export default ContactInfo;
