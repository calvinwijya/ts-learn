abstract class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  eat(): void {
    console.log(`${this.name} is eating...`);
  }

  abstract move(): void;
}

class Cat extends Animal {
  constructor() {
    super("cat");
  }

  move(): void {
    console.log("cat is walking");
  }
}

class Bird2 extends Animal {
  constructor() {
    super("bird");
  }

  move(): void {
    console.log("bird is flying");
  }
}

const cat = new Cat();
console.log(cat.move);

const bird2 = new Bird2();
console.log(bird2.move);
