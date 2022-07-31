class Animal7 {
  name: string;
  leg: number;

  constructor(name: string, legCount: number) {
    this.name = name;
    this.leg = legCount;
  }
}

class Frog extends Animal7 {
  poison: boolean;

  constructor(name: string, legCount: number, poison: boolean) {
    super(name, legCount);
    this.poison = poison;
  }
}

const frog2 = new Frog("alaska frog", 4, true);
console.log(frog2);
