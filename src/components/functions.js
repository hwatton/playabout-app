import * as d3 from "d3";
import names from "./names.js";

export default function dataMaker(num) {
  let rData = [];
  let scale = d3.scaleLinear().range([0, 55]).domain([10, 50]);

  for (let i = 0; i < num; i++) {
    let newY = scale(30 + Math.random() * 50 - 25);
    let newH = scale(60 - newY);
    let nm = names[Math.floor(Math.random() * names.length)];

    rData.push({
      name: nm,
      x: i * 11,
      y: newY,
      height: newH,
      width: 10
    });
  }
  return rData;
}
