import * as d3 from "d3";

function Dthreediv(props) {
  let col = d3.interpolateRainbow(Math.random());
  // this is hectic. try and implement with framer
  setTimeout(() => {
    if (props.show) {
      d3.selectAll(".navText").transition().duration(2000).style("color", col);
    }
  }, 5500);

  return <></>;
}

export default Dthreediv;
