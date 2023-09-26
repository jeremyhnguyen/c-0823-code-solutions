/* exported Shape */

class Shape {
  constructor(area, perimeter) {
    this.area = area;
    this.perimeter = perimeter;
  }

  describe() {
    return `the area of the shape is ${this.area} the perimeter of the shape is ${this.perimeter} `;
  }
}

const myShape = new Shape(8, 2);

console.log(myShape.describe());
