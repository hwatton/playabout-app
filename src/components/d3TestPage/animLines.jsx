import {motion} from "framer-motion"

function LineBlock(props) {

    const num = 6
    console.log(props)

    const blocks =  [...Array(num)].map((el,i) =>{

        return (
            
<motion.div
key={"key_" + i}
style={{
    backgroundColor: props.colours[0],
    width: "100px",
    height: 100/num + "px",
    display: "block"
}}
animate={{
    backgroundColor: props.colours[1],
    width: "100px",
    height: 100/num + "px",
    display: "block"
}}
transition={{ 
    duration: 3, 
    delay: (4*i*(1/num)),
    repeat: Infinity,
    repeatType: "mirror",
    repeatDelay: 1 }}>

</motion.div>
        )
    }
    )

    return (
        <div>
          {blocks}
        </div>
    )
}

export default LineBlock