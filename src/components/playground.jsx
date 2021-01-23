import React, { useState } from "react"

function Thingy(props) {

    let [number, setNumber] = useState(3)

    function doStuff() {
        //call setNumber in here, do some crazy stuff if you need. 
        let no = Math.floor(Math.random()*3-1)
        setNumber(number + no)
    }

    function listOfPs(numberOfThings) {
        let arr = []
        for (let i=0;i<numberOfThings;i++){
            arr.push(
            <p
            key={"key_" + i}>list thing {+ i }</p>)
        }

return arr
    }

    const things = listOfPs(3 + Math.floor(Math.random()*5))

    return (
        <div className="Thingy">
        <p>My thingy is {props.text}, but I'd like it to be {number}</p>
        <button className="Button" onClick={doStuff}>make my thingy more</button>
        {things}
        </div>
    )
}

export default Thingy