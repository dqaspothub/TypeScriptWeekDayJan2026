var calculator = /** @class */ (function () {
    function calculator() {
    }
    calculator.prototype.add = function (a, b) {
        return a + b;
    };
    calculator.prototype.sub = function (a, b) {
        return a - b;
    };
    return calculator;
}());
var cal = new calculator();
console.log(cal.add(80, 90));
console.log(cal.sub(30, 20));
//Function demo
function addition(a, b) {
    return a + b;
}
addition(10, 30);
