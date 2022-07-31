class Animal8 {
  name: string = "";

  breath(): void {
    console.log("breathing...");
  }
}

class Frog2 extends Animal8 {
  breath(): void {
    console.log("slow breath...");
  }
}
//if the parent class has same method with the child class the method from child class will be use
const frog3 = new Frog2();
frog3.breath();