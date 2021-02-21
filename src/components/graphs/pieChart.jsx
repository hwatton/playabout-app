import * as d3 from "d3";
import React, {useRef, useEffect } from "react";

const PieChart = (props) => {
    const d3Container = useRef(null);
    const svgHeight = 200
    const svgWidth = 300
 
    useEffect(() => {

        const svgC = d3.select(d3Container.current);
        const newData = props.testInfo


        const pie = d3.pie()
        .value(function(d) {return d.cv })
        const data_ready = pie(newData)

        let arcFunc = d3.arc()
        .innerRadius(0)
        .outerRadius(90)

     console.log(data_ready)
let pathData = []
     data_ready.forEach((d)=>{

        arcFunc
        .startAngle(d.startAngle)
        .endAngle(d.endAngle)

        let tempObj = arcFunc(d.cv)
pathData.push({path:tempObj, colour:d.data.colourNumber})
     })

     console.log(pathData)

        svgC.select(".pathGroup").remove();
        //console.log(newData)
        const update = svgC
      .append("g")
      .attr("class", "pathGroup")
      .attr("transform", "translate(" + svgWidth/2 + " " + svgHeight/2 + ")")
      .selectAll("path")
      .data(pathData);
 /*
      update.enter()
      .append("path")
      .attr("class", "linePath")
      .attr("d", lineFunc(lineData))
      .style("stroke", (d)=>{return d3.interpolateTurbo(d.lineColour)})
    */

update
   .enter()
   .append('path')
   .attr('d', (d)=>{return d.path}   )
   .attr('fill', function(d){ 
    console.log(d)   
    return d3.interpolateCool(d.colour) })
    .style("stroke", "black")
    .style("stroke-width", "1px")

      /* axes */


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

export default PieChart

