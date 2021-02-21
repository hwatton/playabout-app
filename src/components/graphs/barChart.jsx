import * as d3 from "d3";
import React, {useRef, useEffect } from "react";

const BarChart = (props) => {
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
        .range([0, 180])
        .domain([lowestVal,cvExtent[1]])

        const yAxisScale = d3.scaleLinear()
        .range([180, 0])
        .domain([lowestVal,cvExtent[1]])

        const xScale = d3.scaleLinear()
        .range([20,280])
        .domain([0,newData.length])
     

        svgC.select(".sqGroup").remove();
        //console.log(newData)
        const update = svgC
      .append("g")
      .attr("class", "sqGroup")
      .selectAll("rect")
      .data(newData);

    update.enter();

    update
      .enter()
      .append("rect")
      .attr("x", (d,i) => {return xScale(i)})
      .attr("y", (d) => {return 190 - yScale(d.cv)})
      .attr("width", 0.9*(260/newData.length))
      .attr("height", (d) => yScale(d.cv))
      .attr("fill", (d)=> {return d3.interpolateCool(d.colourNumber)})

      update.exit().remove();

      /* axes */

      d3.selectAll(".axisgroup")
      .remove()

      const axisLeft = svgC.append("g")
      .attr("class", "axisgroup")
      .attr("transform", "translate(20,10)")
      axisLeft.call(
          d3.axisLeft(yAxisScale)
          .ticks(5))

        const axisBottom = svgC.append("g")
        .attr("class", "axisgroup")
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

export default BarChart

