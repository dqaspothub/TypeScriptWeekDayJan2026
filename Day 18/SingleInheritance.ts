class A {
    showA() {
        console.log("Class A");
    }
}

class B extends A {
    showB() {
        console.log("Class B");
    }
}

let obj2 = new B();
obj2.showA();
obj2.showB();
