class Vehicle {

    acct : number = 10;

    start() {
        console.log("Vehicle starting");
    }
}

class Car extends Vehicle {

    start() {
        super.start();  // calling parent method
        console.log("Car starting with key");
    
    
    }
}

let car = new Car();
car.start();
