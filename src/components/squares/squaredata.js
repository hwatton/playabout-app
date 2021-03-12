import * as jStat from "jstat";
import * as d3 from "d3";

function sqData(rows, cols, sdCoefficient, randNum, tx, ty) {
  /* add arguments:
  rows
  cols
  sd factor
  randomization
  more random as progression
  
  */

  


  let vals = [];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let dx = i - tx;
      let dy = j - ty;
      let hyp = hypo(dx, dy);
      vals.push(Math.abs(hyp));
    }
  }

  const mn = jStat.mean(vals);
  const sd = jStat.stdev(vals);

  let cdfStuff = [];

  vals.forEach((el) => {
    cdfStuff.push(
      jStat.normal.cdf(el, mn, sd * sdCoefficient) * 256 +
        Math.random() * (randNum * 2) -
        randNum
    );
  });

  const cdfScale = d3.scaleLinear().range([0, 256]).domain(d3.extent(cdfStuff));

  let scaledCDF = [];

  cdfStuff.forEach((el) => {
    scaledCDF.push(cdfScale(el));
  });

  return scaledCDF;
}

function hypo(x, y) {
  return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
}

export default sqData;
