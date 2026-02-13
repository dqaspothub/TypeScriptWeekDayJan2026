var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(Fname) {
        this.Fname = Fname;
    }
    return Person;
}());
var Students = /** @class */ (function (_super) {
    __extends(Students, _super);
    function Students(Fname, grade) {
        var _this = _super.call(this, Fname) || this; // calling parent constructor
        _this.grade = grade;
        return _this;
    }
    return Students;
}(Person));
var s = new Students("Arun", "A");
console.log(s.Fname);
console.log(s.grade);
