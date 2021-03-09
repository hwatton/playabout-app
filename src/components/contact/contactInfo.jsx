import {motion} from "framer-motion"
import "./contact.css";
import { useState }  from "react"

function ContactInfo() {


  const [showThing, setShowThing] = useState(false)

  return (
    <div className="contactHolder">
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
      drag="x"
      dragConstraints={{ left: 0, right: 300 }}
      onHoverStart={e => {setShowThing(true)}}
      onHoverEnd={e => {setShowThing(false)}}
      >
        {showThing && <div><p>Thing!</p></div>}</motion.div></div>
    </div>
    
  );
}

export default ContactInfo;
