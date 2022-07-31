// array
let names: string[] = ["calvin", "jeny", "felix", "viona"];
let numbers: Array<number> = [1, 2, 3, 4, 5];
console.log(names[0]);
console.log(names[1]);

names[0] = "wijaya";
numbers[4] = 6;
console.log(names[0]);
console.log(names[1]);

let additionalNames: Array<string> = [];
additionalNames.push("rafin");
additionalNames.push("agus");
additionalNames.push("trilian");
console.log(additionalNames);

delete additionalNames[2];
console.log(additionalNames);

// tuple
let student: [string, string, number] = ["1001", "calvin", 1];
let product: [string, number] = ["iphone", 10000000];
console.log(student[2]);
console.log(product[1]);

student[1] = "fat";
product[1] = 14000000;
console.log(student[2]);
console.log(product[1]);
