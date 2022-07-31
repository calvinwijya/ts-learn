class Store {
  private name: string = "store A";
  private marginProfit = 1000;

  getName(): string {
    return this.name;
  }

  getProfit(): number {
    return this.marginProfit;
  }
}

class TechProduct {
  private store: Store;
  private name: string;
  private price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;

    this.store = new Store();
  }

  sell(): void {
    console.log(
      `${this.name} product price is ${this.store.getProfit() + this.price}`
    );
  }
}

const labtop = new TechProduct("long sleeve", 1000000000);
labtop.sell();

// depency injection

interface WiStore {
  name: string;
  marginProfit: number;
  getProfit(): number;
}

class Branch1 implements WiStore {
  name: string = "1 store";
  marginProfit = 4500;

  getName(): string {
    return this.name;
  }

  getProfit(): number {
    return this.marginProfit;
  }
}

class Branch2 implements WiStore {
  name: string = "lens store";
  marginProfit = 9000;

  getName(): string {
    return this.name;
  }

  getProfit(): number {
    return this.marginProfit;
  }
}

class VelgProduct {
  private store: WiStore;
  private name: string;
  private price: number;

  constructor(store: WiStore, name: string, price: number) {
    this.name = name;
    this.price = price;
    this.store = store;
  }

  sell(): void {
    console.log(
      `${this.name} product price is ${this.store.getProfit() + this.price}`
    );
  }
}

class FoodProduct {
  private store: WiStore;
  private name: string;
  private price: number;

  constructor(store: WiStore, name: string, price: number) {
    this.name = name;
    this.price = price;
    this.store = store;
  }

  sell(): void {
    console.log(
      `${this.name} product price is ${this.store.getProfit() + this.price}`
    );
  }
}

const branch1 = new Branch1();
const branch2 = new Branch2();

const mac = new VelgProduct(branch1, "mac", 2000000000);
const mac2 = new VelgProduct(branch2, "rog", 2000000000);

console.log(mac);
console.log(mac2);
mac.sell();
mac2.sell();
