class Bird {
  private leg: number = 2;

  getLeg(): string {
    return this.leg.toString();
  }

  fly(): void {
    console.log("fly");
  }

  async eat(): Promise<string> {
    return "string";
  }
}

const bird = new Bird();

bird.fly();
console.log(bird.eat());
