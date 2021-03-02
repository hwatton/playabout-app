import * as d3 from "d3"
import styles from "./nav.css"
import { useState} from "react"

function Navbar(props) {

const lineFunc = d3.line()
.x(d=>d.x)
.y(d=>d.y)

const barOne = [ 
    {x:0, y: 2},
    {x:20, y: 2}
]

const barOnePath = lineFunc(barOne)

console.log(barOnePath)

const strokeStyle = {
    "stroke": "black",
    "strokeWidth" : "2px",
    "fill" : "none"

}

const [menuActive, setMenuActive] = useState(false)

function showMenu() {


    if(!menuActive){
        setMenuActive(true)
    }else{
        setMenuActive(false)
    }

}


return (

 
<div className={menuActive? "topnav navresponsive": "topnav"} id="myTopnav">
  <a className={menuActive? " navitemClicked": "navitem"} href="#home" class="active">Home</a>
  <a className={menuActive? " navitemClicked": "navitem"} href="#news">News</a>
  <a className={menuActive? " navitemClicked": "navitem"} href="#contact">Contact</a>
  <a className={menuActive? " navitemClicked": "navitem"} href="#about">About</a>
  
  <div className="navBurger"
  onClick={()=> showMenu()}>
  <svg 
    height="24"
    width="20">
        <path 
        d="M1,6L19,6"
        style={strokeStyle}></path>
        <path 
        d="M1,12L19,12"
        style={strokeStyle}></path>
        <path 
        d="M1,18L19,18"
        style={strokeStyle}></path>
    </svg>
    </div>
</div>


)
}

export default Navbar