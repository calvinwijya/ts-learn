class Vehicle {
  name: string;
  wheels: number;
}

class ICar extends Vehicle {
  doors: number;
}

class Civic implements ICar {
  name: string = "civic";
  wheels: number = 4;
  doors: number = 2;
}
