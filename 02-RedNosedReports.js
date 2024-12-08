import { input02 } from "./inputs.js";

const formattedInput = [];
let safeCount = 0;

for (let string of input02.split("\n")) {
  let innerArr = [];
  for (let innerStr of string.split(" ")) {
    innerArr.push(Number(innerStr));
  }
  formattedInput.push(innerArr);
}

function algo(arr) {
  let decreasing = true;
  if (arr[0] < arr[1]) {
    decreasing = !decreasing;
  }
}

for (let val of formattedInput) {
  if (algo(val)) {
    safeCount++;
  }
}

console.log(safeCount);
