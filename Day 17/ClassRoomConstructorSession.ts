class Loggers {

    public CourseName : String;
    private CourseFee : number;

    add(a: number,b: number): number{
         return a+b;
    }

    constructor(CourseName: String,CourseFee: number){

        this.CourseFee = CourseFee;
        this.CourseName = CourseName;

        console.log("This is my constructor");
        console.log("The course Name "+CourseName );
        console.log("The course Fee "+CourseFee );

    }

   
}

const logs = new Loggers("TypeScript",8000);
const logs1 = new Loggers("Playwright",8000);
const logs2 = new Loggers("Java",8000);
const logs3 = new Loggers("Selenium",8000);

console.log(logs.CourseName);
console.log(logs1.CourseName);
console.log(logs2.CourseName);
console.log(logs3.CourseName);

console.log(logs.add(19,20));


