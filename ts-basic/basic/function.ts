function add1(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number) {
  console.log("result: " + num);
  return;
}

printResult(add1(1, 2));
console.log(printResult(add1(2, 2)));

// function type//

let combValue: (a: number, b: number) => number;

combValue = add1;

console.log(combValue(8, 8));

/////////////callback/////////////////
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 10, (result) => {
  console.log(result);
});
