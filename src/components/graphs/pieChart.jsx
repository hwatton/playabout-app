import * as d3 from "d3";
import React, { useRef, useEffect } from "react";

const PieChart = (props) => {
  const d3Container = useRef(null);
  const svgHeight = 200;
  const svgWidth = 300;
  let pieDataTimer;

  useEffect(() => {
    const svgC = d3.select(d3Container.current);
    const newData = props.testInfo;

    const pie = d3.pie().value(function (d) {
      return d.cv;
    });
    const data_ready = pie(newData);

    let arcFunc = d3.arc().innerRadius(0).outerRadius(90);

    let pathData = [];
    data_ready.forEach((d, i) => {
      arcFunc.startAngle(d.startAngle).endAngle(d.endAngle);

      let tempObj = arcFunc(d.cv);
      pathData.push({
        path: tempObj,
        colour: d.data.colourNumber,
        number: d.data.cv,
        index: i
      });
    });

    svgC.select(".pathGroup").remove();
    //console.log(newData)
    const update = svgC
      .append("g")
      .attr("class", "pathGroup")
      .attr(
        "transform",
        "translate(" + svgHeight / 2 + " " + svgHeight / 2 + ")"
      )
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
      .append("path")
      .attr("d", (d) => {
        return d.path;
      })
      .attr("fill", function (d) {
        return d3.interpolateCool(d.colour);
      })
      .style("stroke", "black")
      .style("stroke-width", "1px")
      .on("mouseover", (e, d) => {
        if (pieDataTimer) {
          window.clearTimeout(pieDataTimer);
        }

        let textTwo = "Value: " + d.number;
        d3.select(".textOne").text("Data");

        d3.select(".textTwo").text(textTwo);

        let textThree = "Colour: " + d3.interpolateCool(d.colour);

        d3.select(".textThree").text(textThree);

        let textFour = "Index: " + (d.index + 1);

        d3.select(".textFour").text(textFour);
      })
      .on("mouseout", () => {
        pieDataTimer = window.setTimeout(() => {
          d3.selectAll(".pieText").text("");
        }, 3500);
      });

    /* axes */
  }, [props]);

  return (
    <div className="chartContainer">
      <br />
      <svg
        className="d3-component"
        width={svgHeight}
        height={svgHeight}
        ref={d3Container}
      />
      <div className="hoverData">
        <br />
        <p className="textOne pieText bold"></p>
        <p className="textTwo pieText "></p>
        <p className="textThree pieText "></p>
        <p className="textFour pieText "></p>
      </div>
    </div>
  );
};

export default PieChart;
