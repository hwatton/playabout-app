import * as d3 from "d3";
import React, { useState, useRef, useEffect } from "react";

const LineGraph = (props) => {
    const d3Container = useRef(null);

 
    useEffect(() => {

        const svgC = d3.select(d3Container.current);
        const newData =props.testInfo

        svgC.select(".sqGroup").remove();
        console.log(newData)
        const update = svgC
      .append("g")
      .attr("class", "sqGroup")
      .selectAll("rect")
      .data(newData);

    update.enter();

    update
      .enter()
      .append("rect")
      .attr("x", (d,i) => i * 22)
      .attr("y", 100)
      .attr("width", 20)
      .attr("height", (d) => d.cv*10)
      .attr("fill", "red")

      update.exit().remove();

    },[props])

let inforFromState = props.testInfo.map((item,i)=>{
    let eyeD = "id_" + i
    return <p 
    className="testinfo"
    key= {eyeD}
    >{item.cv}</p>
})

    return (
        <div>
            <p className="testinfo">test info:</p>
            {inforFromState}
            <svg
        className="d3-component"
        width={500}
        height={500}
        ref={d3Container}
      />
        </div>
    )

}

export default LineGraph

