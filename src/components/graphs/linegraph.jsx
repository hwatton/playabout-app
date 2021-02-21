import * as d3 from "d3";
import React, {useRef, useEffect } from "react";

const LineGraph = (props) => {
    const d3Container = useRef(null);
    const svgHeight = 200
    const svgWidth = 300
 
    useEffect(() => {

        const svgC = d3.select(d3Container.current);
        const newData = props.testInfo

        const cvExtent = d3.extent(newData, (d)=>{
            return d.cv
        })

        const lowestVal = d3.min([cvExtent[0],0])


        const yScale = d3.scaleLinear()
        .range([180,0])
        .domain([lowestVal,cvExtent[1]])

        const yAxisScale = d3.scaleLinear()
        .range([180, 0])
        .domain([lowestVal,cvExtent[1]])

        const xScale = d3.scaleLinear()
        .range([20,280])
        .domain([0,newData.length])

        const lineFunc = d3.line()
        .x(d=>xScale(d.x))
        .y(d=>yScale(d.y)+10) //adjust for manually added padding
        .curve(d3.curveCardinal.tension(0.5))

        let lineData = []
        for (let i =0;i<newData.length; i++) {
            lineData.push(
                {x:(i+0.5),y: newData[i].cv }
            )
        }
     

        svgC.select(".pathGroup").remove();
        //console.log(newData)
        const update = svgC
      .append("g")
      .attr("class", "pathGroup")
      .selectAll("path")
      .data(newData);

      update.enter()
      .append("path")
      .attr("class", "linePath")
      .attr("d", lineFunc(lineData))
      .style("stroke", (d)=>{return d3.interpolateCool(d.lineColour)})
    

      /* axes */

      d3.selectAll(".axisgroupLine")
      .remove()

      const axisLeft = svgC.append("g")
      .attr("class", "axisgroupLine")
      .attr("transform", "translate(20,10)")
      axisLeft.call(
          d3.axisLeft(yAxisScale)
          .ticks(5))

        const axisBottom = svgC.append("g")
        .attr("class", "axisgroupLine")
        .attr("transform", "translate(0, 190)") 

        axisBottom.call(
            d3.axisBottom(xScale)
            .ticks(0))


    },[props])

    return (
        <div className="chartContainer">
           <br/>
            <svg
        className="d3-component"
        width={svgWidth}
        height={svgHeight}
        ref={d3Container}
      />
        </div>
    )

}

export default LineGraph

