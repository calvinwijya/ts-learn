import labtop from "./baseLabtop";

class Asus<T> extends labtop<T> {
  constructor(name: string, type: T, numpad: boolean, button: boolean) {
    super("asus", type, numpad, button);
  }
}

export default Asus;
