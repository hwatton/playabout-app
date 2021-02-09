import * as d3 from "d3";
import React, { useState, useRef, useEffect } from "react";
import HoverDiv from "./hoverDiv.jsx";

const D3BarChart = (props) => {
  const d3Container = useRef(null);

  const [hover, setHover] = useState({
    boolean: false,
    x_pos: null,
    y_pos: null,
    text: null,
    col: null
  });

  useEffect(() => {
    const svgC = d3.select(d3Container.current);

    svgC.select(".sqGroup").remove();

    console.log(props.data);
    let newObj = props.data.map((el) => {
      let o = Object.assign({}, el);
      o.colour = d3.interpolateRainbow(Math.random());
      return o;
    });

    console.log(newObj);

    const update = svgC
      .append("g")
      .attr("class", "sqGroup")
      .selectAll("rect")
      .data(newObj);

    update.enter();

    update
      .enter()
      .append("rect")
      .attr("x", (d) => d.x)
      .attr("y", (d) => d.y)
      .attr("width", (d) => d.width)
      .attr("height", (d) => d.height)
      .attr("fill", (d) => d.colour)
      .on("mouseover", (d, i) => {
        console.log(d);
        setHover({
          boolean: true,
          x_pos: d.clientX,
          y_pos: d.clientY,
          text: i.name,
          col: i.colour
        });
        d3.select("#hoverDiv").style("opacity", "90%");
        setTimeout(() => {
          setHover({
            boolean: false,
            x_pos: null,
            y_pos: null,
            text: null,
            col: null
          });
        }, 1500);
      })

      .on("click", () => {
        props.clicky();
      });

    update.exit().remove();
  }, [props]);

  return (
    <div>
      {hover && (
        <HoverDiv
          col={hover.col}
          name={hover.text}
          x={hover.x_pos}
          y={hover.y_pos}
        />
      )}
      <svg
        className="d3-component"
        width={props.width}
        height={props.height}
        ref={d3Container}
      />
    </div>
  );
};

export default D3BarChart;
