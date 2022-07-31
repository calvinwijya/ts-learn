class Chicken {
  static leg: number = 2;

  static walk() {
    console.log(`chicken is walk with ${this.leg} leg`);
  }

  getLeg() {
    console.log(Chicken.leg);
    // console.log(this.leg);
  }
}

console.log(Chicken.walk());

const chciken2 = new Chicken();
chciken2.getLeg();
