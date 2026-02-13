class Animal {
    makeSound() {
        console.log("Animal makes sound");
    }
}

class Cat extends Animal {
    makeSound() {
        console.log("Cat meows");
    }
}

let c1 = new Cat();
c1.makeSound();  // Cat meows
