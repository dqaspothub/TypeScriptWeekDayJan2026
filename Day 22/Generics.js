// Generic Function
function printValue(value) {
    console.log("Value:", value);
}
printValue(10);
printValue("Hello");
// Generic Class
var DataStore = /** @class */ (function () {
    function DataStore() {
        this.items = [];
    }
    DataStore.prototype.add = function (item) {
        this.items.push(item);
    };
    DataStore.prototype.getAll = function () {
        return this.items;
    };
    return DataStore;
}());
var store = new DataStore();
store.add("Apple");
store.add("Banana");
console.log(store.getAll());
