import labtop from "./baseLabtop";

class Macbook<T> extends labtop<T> {
  constructor(name: string, type: T, numpad: boolean, button: boolean) {
    super("Macbook", type, numpad, button);
  }
}

export default Macbook;
