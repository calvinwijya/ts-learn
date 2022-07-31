interface AndroidPhone {
  name: string;
  menu(): void;
  home(): void;
  back(): void;
}

class Samsung implements AndroidPhone {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  menu(): void {
    console.log("menu tapped");
  }
  home(): void {
    console.log("home tapped");
  }
  back(): void {
    console.log("back tapped");
  }
}

class Asus implements AndroidPhone {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  menu(): void {
    console.log("menu tapped");
  }
  home(): void {
    console.log("home tapped");
  }
  back(): void {
    console.log("back tapped");
  }
}

class Game {
  private phone: AndroidPhone;

  constructor(phone: AndroidPhone) {
    this.phone = phone;
  }

  back() {
    console.log("back to main menu");
  }

  menu() {
    this.phone.menu();
  }

  home() {
    this.phone.home();
  }
}

const samsung = new Samsung("S22 ULTRA");

const game = new Game(samsung);

game.back();
game.home();
game.menu();

// ------------------------- apPLLE

interface ApplePhone {
  home(): void;
}

class Iphone implements ApplePhone {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  home(): void {
    console.log("back to main home");
  }
}

const iphone = new Iphone("Iphone 13");

// const game2 = new Game(iphone)
