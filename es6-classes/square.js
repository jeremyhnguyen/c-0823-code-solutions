/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Square */

class Square extends Shape {
  constructor(width) {
    super(width ** 3, width * 4);
    this.width = width;
  }

  describe() {
    return `${super.describe()}and the width is ${this.width}`;
  }
}

const mySquare = new Square(4);
console.log(mySquare.describe());
