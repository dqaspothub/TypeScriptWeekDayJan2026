class Animal {
  sound() {
    console.log("Animal makes sound");
  }
}

class Dog extends Animal {
  sound() {
    console.log("Dog barks");
  }
}

class Cat extends Animal {
  sound() {
    console.log("Cat meows");
  }
}

let a1: Animal = new Dog();
let a2: Animal = new Cat();

a1.sound();
a2.sound();
