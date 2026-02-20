class Cars {
    constructor(
        public brand: string,
        private price: number,
        protected model: string
    ) {}

    public show(): void {
        console.log(this.brand, this.price, this.model);
    }
}

let car = new Cars("BMW", 5000000, "X5");

console.log(car.brand); // ✅
// console.log(car.price); ❌
// console.log(car.model); ❌
