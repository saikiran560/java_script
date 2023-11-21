// Parent class
class Shape {
    constructor() {
      this.type = 'Shape';
    }
  
    // Method to calculate area (to be overridden by subclasses)
    calculateArea() {
      return 0;
    }
  
    // Method to describe the shape
    describe() {
      console.log(`This is a ${this.type}.`);
    }
  }
  
  // Subclass 1
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.type = 'Circle';
      this.radius = radius;
    }
  
    // Overriding the calculateArea method
    calculateArea() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  }
  
  // Subclass 2
  class Square extends Shape {
    constructor(sideLength) {
      super();
      this.type = 'Square';
      this.sideLength = sideLength;
    }
  
    // Overriding the calculateArea method
    calculateArea() {
      return Math.pow(this.sideLength, 2);
    }
  }
  
  // Function to use polymorphism
  function printArea(shape) {
    console.log(`Area of ${shape.type}: ${shape.calculateArea()}`);
  }
  
  // Creating instances of different shapes
  const circle = new Circle(5);
  const square = new Square(4);
  
  // Using polymorphism to calculate and print areas
  printArea(circle); // Output: Area of Circle: 78.53981633974483
  printArea(square); // Output: Area of Square: 16
  