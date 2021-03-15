import MazeData from "./mazeFunction.js"
import * as d3 from "d3"

import { useRef, useEffect } from "react"

function MazeGrid (props) {

    const mazeContainer = useRef(null);

   

    useEffect(() => {

        const data = MazeData(props.size, props.svgSize)

        const svgC = d3.select(mazeContainer.current);

        svgC.selectAll(".mazeLine").remove()

function pathWidth(size) {
    let wd 
    if (size<100) {wd = "1px"}
    if (size<40) {wd = "2px"}
    if (size<30) {wd = "3px"}
    if (size<20) {wd = "5px"}

    return wd

}


        svgC.append("path")
        .attr("class", "mazeLine")
        .attr("d", data.wallOne)
        .attr("fill", "none")
        .style("stroke-width", pathWidth(props.size))
        .style("stroke", "black")

        svgC.append("path")
        .attr("class", "mazeLine")
        .attr("d", data.wallTwo)
        .attr("fill", "none")
        .style("stroke-width", pathWidth(props.size))
        .style("stroke", "black")

        for (let i=0; i<data.interiorWalls.length; i++) {
            svgC.append("path")
            .attr("class", "mazeLine")
        .attr("d", data.interiorWalls[i].lineData)
        .attr("fill", "none")
        .style("stroke-width", pathWidth(props.size))
        .style("stroke", "black")
        }

        for (let i=0; i<data.circleData.length; i++) {
            svgC.append("circle")
            .attr("class", "mazeLine path-junctions")
        .attr("cx", data.circleData[i].cx)
        .attr("cy", data.circleData[i].cy)
        .attr("r", ()=>{
            let str = pathWidth(props.size)
            return 0.85*(parseInt(str.substring(0,1), 10)/2)
        })
        .attr("fill", "black")
        .style("stroke", "none")
        }


       
      }, []);


    return (
        
        <div className="container">
            <p>{props.size}</p>
      <svg
        className="d3-component"
        width={props.svgSize}
        height={props.svgSize}
        ref={mazeContainer}
      />
      </div>
    )
}

export default MazeGrid