class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  speak() {
    console.log("I can speak");
  }
}

let p1 = new Person("Ravi", 25);
let p2 = new Person("Anita", 30);

p1.speak();
