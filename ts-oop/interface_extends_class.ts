class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

interface Shark extends Animal {
  Swim(): void;
}

class Sharko implements Shark {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  Swim(): void {
    console.log("swimm");
  }
}
