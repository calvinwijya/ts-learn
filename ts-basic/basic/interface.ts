interface Labtop {
  name: string;
  on(): void;
  off(): void;
}

class Asus implements Labtop {
  name: string;
  RGBKeyboard: boolean;

  constructor(name: string, RGBKeyboard: boolean) {
    this.name = name;
    this.RGBKeyboard = RGBKeyboard;
  }
  on(): void {
    console.log("nyala");
  }
  off(): void {
    console.log("mati");
  }
}

class Macbook implements Labtop {
  name: string;
  keyboardLight: boolean;
  constructor(name: string, keyboardlight: boolean) {
    this.name = name;
    this.keyboardLight = keyboardlight;
  }
  on(): void {
    console.log("nyala");
  }
  off(): void {
    console.log("mati");
  }
}

let asus = new Asus("ASUS", true);
console.log(asus.on());

let mb = new Macbook("MACBOOK PRO", true);
console.log(mb.on());
