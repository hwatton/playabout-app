import * as d3 from "d3";
import React, { useRef, useEffect } from "react";

const D3BarChart = (props) => {
  const d3Container = useRef(null);

  useEffect(() => {
    const svgC = d3.select(d3Container.current);

    svgC.select(".sqGroup").remove();

    const update = svgC
      .append("g")
      .attr("class", "sqGroup")
      .selectAll("rect")
      .data(props.data);

    update.enter();

    console.log(props.data);

    update
      .enter()
      .append("rect")
      .attr("x", (d) => d.x)
      .attr("y", (d) => d.y)
      .attr("width", (d) => d.width)
      .attr("height", (d) => d.height)
      .attr("fill", () => {
        return d3.interpolateRainbow(Math.random());
      })
      .on("click", () => {
        console.log("clicked");
        props.clicky();
      });

    update.exit().remove();
  }, [props]);

  return (
    <svg
      className="d3-component"
      width={props.width}
      height={props.height}
      ref={d3Container}
    />
  );
};

export default D3BarChart;
