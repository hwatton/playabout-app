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
        var data_ready = pie(newData)

     console.log(data_ready)

        svgC.select(".pathGroup").remove();
        //console.log(newData)
        const update = svgC
      .append("g")
      .attr("class", "pathGroup")
      .attr("transform", "translate(" + svgWidth/2 + " " + svgHeight/2 + ")")
      .selectAll("path")
      .data(data_ready);
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
   .attr('d', /* work out what to out in here! */   )
   .attr('fill', function(d){ return d3.interpolateTurbo(d.lineColour) })

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

