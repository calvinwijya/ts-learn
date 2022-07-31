import Asus from "./asus";
import Macbook from "./macbook";

let asusLabtop = new Asus("zenbook", true, true, true);
console.log(asusLabtop);

let macbook = new Macbook("zenbook", true, false, false);
console.log(macbook);

console.log(macbook.a());
