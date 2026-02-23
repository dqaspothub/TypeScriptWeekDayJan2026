// Generic Function
function printValue<T>(value: T): void {
    console.log("Value:", value);
}

printValue(10);
printValue("Hello");

// Generic Class
class DataStore<T> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    getAll(): T[] {
        return this.items;
    }
}

const store = new DataStore<string>();
store.add("Apple");
store.add("Banana");

console.log(store.getAll());