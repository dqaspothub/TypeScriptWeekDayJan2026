class GrandParent {
    house() {
        console.log("Grandparent House");
    }
}

class Parent extends GrandParent {
    car() {
        console.log("Parent Car");
    }
}

class son extends Parent {
    bike() {
        console.log("Child Bike");
    }
}

let c = new son();
c.house();
c.car();
c.bike();
