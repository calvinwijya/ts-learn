class Animal4 {
  name: string;
  leg: number;

  constructor(name: string, legCount: number) {
    this.name = name;
    this.leg = legCount;
  }
}

const bird = new Animal4("chiken", 2);
console.log(bird);

// simpler
class Animal5 {
  constructor(public name: string, public legCount: number) {
    this.legCount = legCount;
    this.name = name;
  }
}

const bird2 = new Animal5("owl", 2);
console.log(bird2);
