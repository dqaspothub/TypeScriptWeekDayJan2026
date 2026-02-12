class Person {
    Fname: string;

    constructor(Fname: string) {
        this.Fname = Fname;
    }
}

class Students extends Person {
    grade: string;

    constructor(Fname: string, grade: string) {
        super(Fname);   // calling parent constructor
        this.grade = grade;
    }
}

let s = new Students("Arun", "A");
console.log(s.Fname);
console.log(s.grade);
