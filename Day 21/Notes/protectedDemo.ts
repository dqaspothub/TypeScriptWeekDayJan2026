class Peron {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class Emploe extends Peron {
    public display(): void {
        console.log("Employee Name:", this.name); // ✅ Allowed
    }
}

let empn = new Emploe("Rahul");
empn.display();

// console.log(emp.name); ❌ ERROR
