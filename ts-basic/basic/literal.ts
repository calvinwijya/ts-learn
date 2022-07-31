function combine1(
  input1: number | string,
  input2: number | string,
  resultType: string
) {
  let result: number | string;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  if (resultType === "is string") {
    return +result;
  } else {
    return result.toString();
  }
}

const combinedNum1 = combine1(10, 10, "is string");
console.log(combinedNum1);

const combinedNames1 = combine1("Max", "Kusnadi", "string is");
console.log(combinedNames1);
