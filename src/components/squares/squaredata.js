import * as jStat from "jstat";

function sqData() {
  let beans = [];

  const tx = Math.floor(Math.random() * 20);
  const ty = Math.floor(Math.random() * 40);

  let colStep = 256 / 41;
  let normalStuff = [];

  for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 40; j++) {
      let dx = i - tx;
      let dy = j - ty;

      let hyp = hypo(dx, dy);
      let tmp = jStat.normal.pdf(hyp, 20, 0.5);

      beans.push(hypo(dx, dy) * colStep);
      normalStuff.push({
        bean: hyp * colStep,
        norm: tmp
      });
    }
  }
  console.log("this " + jStat.normal.pdf(5, 5, 2));
  return normalStuff;
}

function hypo(x, y) {
  return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
}

export default sqData;
