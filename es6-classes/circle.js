/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */

class Circle extends Shape {
  constructor(radius) {
    super(Math.PI * radius ** 2, 2 * Math.PI * radius);
    this.radius = radius;
  }

  describe() {
    return `${super.describe()} and the radius is ${this.radius}`;
  }
}

const myCircle = new Circle(3);
console.log(myCircle.describe());
