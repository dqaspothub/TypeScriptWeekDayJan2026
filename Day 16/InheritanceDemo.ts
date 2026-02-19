class Vehicle {
  start() {
    console.log("Vehicle started");
  }
}

class Car extends Vehicle {
  drive() {
    console.log("Car is driving");
  }
}

let car = new Car();
car.start(); // inherited
car.drive();
