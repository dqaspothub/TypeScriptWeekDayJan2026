class Employees {
    protected salary: number = 50000;
    private bonus: number = 10000;
    public age: number = 50;    
}

class Manager extends Employees {
    show() {
        console.log(this.salary);  // ✅ allowed
        //console.log(this.bonus); ❌ error
        console.log(this.age); // ✅ allowed
        
    }
}


let c1 = new Manager();
c1.show();