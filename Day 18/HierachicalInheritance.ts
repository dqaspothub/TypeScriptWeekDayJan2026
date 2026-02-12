class Shape {
    draw() {
        console.log("Drawing shape");
    }
}

class Circle extends Shape {}
class Square extends Shape {}

let circle = new Circle();
let square = new Square();

circle.draw();
square.draw();

//One parent, multiple children.


/* Multiple Inheritance (Not Supported)

TypeScript classes DO NOT support:

class A {}
class B {}
class C extends A, B {} ❌ Not allowed 

Windows: Shift + Alt + A
*/