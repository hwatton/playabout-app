import * as d3 from "d3";
import React, { useRef, useEffect } from "react";

const D3BarChart = (props) => {
  const d3Container = useRef(null);

  useEffect(() => {
    const svgC = d3.select(d3Container.current);

    const update = svgC.append("g").selectAll("rect").data(props.data);

    update.exit();

    update
      .enter()
      .append("rect")
      .attr("x", (d) => d.x)
      .attr("y", (d) => d.y)
      .attr("width", (d) => d.width)
      .attr("height", (d) => d.height)
      .attr("fill", () => {
        return d3.interpolateRainbow(Math.random());
      });
  }, [props.data, d3Container.current]);

  return (
    <svg className="d3-component" width={400} height={200} ref={d3Container} />
  );
};

export default D3BarChart;
