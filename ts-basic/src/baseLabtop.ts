import labtop from "./labtop";
import * as keyboard from "./keyboard";
import { b } from "./keyboard";

abstract class BaseLabtop<T> implements labtop<T> {
  name: string;
  type: T;
  numpad: boolean;
  trackPadButton: boolean;

  constructor(name: string, type: T, numpad: boolean, button: boolean) {
    this.name = name;
    this.type = type;
    this.numpad = numpad;
    this.trackPadButton = button;
  }

  a() {
    return keyboard.a();
  }

  b() {
    return keyboard.b();
  }
}

export default BaseLabtop;
