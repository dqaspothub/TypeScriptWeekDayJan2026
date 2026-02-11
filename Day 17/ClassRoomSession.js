var Loggers = /** @class */ (function () {
    function Loggers(CourseName, CourseFee) {
        this.CourseFee = CourseFee;
        this.CourseName = CourseName;
        console.log("This is my constructor");
        console.log("The course Name " + CourseName);
        console.log("The course Fee " + CourseFee);
    }
    Loggers.prototype.add = function (a, b) {
        return a + b;
    };
    return Loggers;
}());
var logs = new Loggers("TypeScript", 8000);
var logs1 = new Loggers("Playwright", 8000);
var logs2 = new Loggers("Java", 8000);
var logs3 = new Loggers("Selenium", 8000);
console.log(logs.CourseName);
console.log(logs1.CourseName);
console.log(logs2.CourseName);
console.log(logs3.CourseName);
console.log(logs.add(19, 20));
