abstract class Shape {
  abstract area(): number;

  display() {
    console.log("This is a shape");
  }
}

class Rectangle extends Shape {
  area(): number {
    return 10 * 5;
  }
}
