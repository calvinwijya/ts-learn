class Animal6 {
  name: string = "";
  leg: number = 0;

  run() {
    console.log("running...");
  }
}

class Chick extends Animal6 {
  colour: string = "green";
}

const animal6 = new Chick();
animal6.name = "eagle";
animal6.leg = 2;
console.log(animal6);
animal6.run();
