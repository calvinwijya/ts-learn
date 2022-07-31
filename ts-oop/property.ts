class Animal3 {
  name: string = "";
  leg: number = 0;
  mamalia: boolean = false;

  breathe() {
    console.log(`${this.name} breathing...`);
  }
}

const animal3 = new Animal3();
console.log(animal3);

animal3.name = "dog";
animal3.leg = 4;
console.log(animal3);

animal3.breathe();
