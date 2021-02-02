export default function dataMaker(num) {
  let rData = [];
  for (let i = 0; i < num; i++) {
    let newY = 20 + Math.random() * 20 - 10;
    let newH = 30 - newY;

    rData.push({
      x: i * 11,
      y: newY,
      height: newH,
      width: 10
    });
  }

  return rData;
}
