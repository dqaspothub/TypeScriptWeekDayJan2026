var Payment = /** @class */ (function () {
    function Payment(amount) {
        this.amount = amount;
    }
    Payment.prototype.printReceipt = function () {
        console.log("Payment of ".concat(this.amount, " processed."));
    };
    return Payment;
}());
var obj = new Payment(1000);
obj.printReceipt();
