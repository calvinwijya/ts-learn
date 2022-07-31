// public
// protected: method can called by the class it self and the child class
// private: called in the class itself

class Animal9 {
  public name: string;
  private leg: number;
  protected mamalia: boolean;

  constructor(name: string, legCount: number, mamalia: boolean) {
    this.leg = legCount;
    this.mamalia = mamalia;
    this.name = name;
  }

  walk() {}
}

class Frog3 extends Animal9 {
  private eggAge: number = 4;
  private kecebongAge: number = 7;
  private frogAge: number = 90;

  getAge() {
    console.log(this.eggAge + this.frogAge + this.kecebongAge);
  }
}

const frog4 = new Frog3("alaska frog", 4, true);
frog4.getAge();
