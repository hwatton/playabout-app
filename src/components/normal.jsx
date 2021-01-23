import react from "react"
import * as d3 from "d3"
import * as jstat from "jstat"

function Normal(props) {
let ht = props.height
let wd = props.width
const line = d3.line()
.x(d=>d.x)
.y(d=>d.y)

let arr = []
for (let i = 0;i<wd;i++) {
    arr.push({x:i, y:jstat.normal.sample(wd/2,40)})
}


    return (
        <div>  
        <p>{props.text}</p>
        <svg
        
        >
            <path className="normal-line" d={line(arr)}/>
        </svg>
        </div>
      
    )
}

export default Normal