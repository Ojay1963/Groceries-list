// Class constructor
class Bottledwater {
  constructor(brand, volume, price) {
    this.brand = brand;
    this.volume = volume;
    this.price = price;
  }

  open() {
    console.log(this.brand, "turn to open");
    return this;
  }
}

const mrv = new Bottledwater("mr v", "50cl", 250);
console.log(mrv);
mrv.open();

// Rectangle class
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
;
  calcArea() {
    let area = this.width * this.height;
    console.log(`${area}m2`);
    return this;
  }

  calPerimeter() {
    let perimeter = 2 * this.width + 2 * this.height;
    console.log(`${perimeter}m`);
    this.perimeter = perimeter
    return this;
  }
}

const room = new Rectangle(30, 50);
room.calcArea();


// Create and use instances
const per = new Rectangle(30, 50);
per.calPerimeter();


