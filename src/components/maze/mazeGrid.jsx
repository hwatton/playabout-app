import MazeData from "./mazeFunction.js";
import * as d3 from "d3";

import { useRef, useEffect } from "react";

function MazeGrid(props) {
  const mazeContainer = useRef(null);

  useEffect(() => {
    const data = MazeData(props.cellNumber, props.svgSize);

    const svgC = d3.select(mazeContainer.current);

    svgC.selectAll(".mazeLine").remove();

    function pathWidth(size) {
      let wd;
      if (size < 100) {
        wd = "1px";
      }
      if (size < 40) {
        wd = "2px";
      }
      if (size < 30) {
        wd = "3px";
      }
      if (size < 20) {
        wd = "5px";
      }

      return wd;
    }

    if (props.cellNumber <= 50 && props.cellNumber > 0) {
      svgC
        .append("path")
        .attr("class", "mazeLine")
        .attr("d", data.wallOne)
        .attr("fill", "none")
        .style("stroke-width", pathWidth(props.cellNumber))
        .style("stroke", "black");

      svgC
        .append("path")
        .attr("class", "mazeLine")
        .attr("d", data.wallTwo)
        .attr("fill", "none")
        .style("stroke-width", pathWidth(props.cellNumber))
        .style("stroke", "black");

      for (let i = 0; i < data.interiorWalls.length; i++) {
        svgC
          .append("path")
          .attr("class", "mazeLine")
          .attr("d", data.interiorWalls[i].lineData)
          .attr("fill", "none")
          .style("stroke-width", pathWidth(props.cellNumber))
          .style("stroke", "black");
      }
      /* disabled for now - triggers an error
        for (let i=0; i<data.circleData.length; i++) {
            svgC.append("circle")
            .attr("class", "mazeLine path-junctions")
        .attr("cx", data.circleData[i].cx)
        .attr("cy", data.circleData[i].cy)
        .attr("r", ()=>{
            let str = pathWidth(props.cellNumber)
            return 0.85*(parseInt(str.substring(0,1), 10)/2)
        })
        .attr("fill", "black")
        .style("stroke", "none")
        }

        */
    }
  }, [props.cellNumber, props.version, props.svgSize]);

  return (
    <div
      className="container"
      style={{
        width: props.svgSize
      }}
    >
      <svg
        className="d3-component"
        width={props.svgSize}
        height={props.svgSize}
        ref={mazeContainer}
      />
    </div>
  );
}

export default MazeGrid;
