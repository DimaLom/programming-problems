let lost = 0;
let won = 0;
const arr = [0, 1, 2];
let step = 0;
while (step < 100000) {
  let secondArr = [...arr];
  let userIndex = Math.floor(Math.random() * secondArr.length);
  let wonIndex = Math.floor(Math.random() * secondArr.length);
  let removeIndex;
  for (let i of secondArr) {
    if (i !== userIndex && i !== wonIndex) {
      removeIndex = i;
    }
  }
  secondArr.splice(removeIndex, 1);
  if (wonIndex === userIndex) {
    won++;
  } else {
    lost++;
  }
  step++;
}
console.log(won / 1000, lost / 1000);
