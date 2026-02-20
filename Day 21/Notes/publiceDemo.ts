class Student {
    public name: string;
    public age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public display(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

let s1 = new Student("Rahul", 25);

console.log(s1.name);   // ✅ Accessible
s1.display();           // ✅ Accessible
