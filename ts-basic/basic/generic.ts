function getData(value: string) {
  return value;
}

console.log(getData("calvin"));

function myData<T>(value: T) {
  return value;
}

console.log(myData("calvin").length);
console.log(myData(12).toString());
