import * as jStat from "jstat";
import * as d3 from "d3"

function sqData() {
  /* add arguments:
  rows
  cols
  sd factor
  randomization
  more random as progression
  
  */
  let beans = [];

  const tx = Math.floor(Math.random() * 20);
  const ty = Math.floor(Math.random() * 40);

  let colStep = 256 / 41;
  let normalStuff = [];
  let vals = []

  for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 40; j++) {
      let dx = i - tx;
      let dy = j - ty;
      let hyp = hypo(dx, dy);
      vals.push(Math.abs(hyp))
    }
  }

  const mn = jStat.mean(vals);
  const sd = jStat.stdev(vals)

  let cdfStuff = []

vals.forEach((el=>{
  normalStuff.push(jStat.normal.pdf(el,mn,sd*(1+ Math.random()*1)))
  cdfStuff.push(jStat.normal.cdf(el,mn,sd*2)*256)
}))

const min = jStat.min(normalStuff)
const max = jStat.max(normalStuff) 
const aj = 1.8
const scale = (100 * aj)/max


let finalVals = []
normalStuff.forEach((el)=>{
let adj = (el - min) * scale
finalVals.push(adj)
})

const cdfScale = d3.scaleLinear()
.range([0,256])
.domain(d3.extent(cdfStuff))

let scaledCDF = []

cdfStuff.forEach((el)=>{
  scaledCDF.push(cdfScale(el)*0.89)
})

  return scaledCDF;

}

function hypo(x, y) {
  return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
}

export default sqData;
