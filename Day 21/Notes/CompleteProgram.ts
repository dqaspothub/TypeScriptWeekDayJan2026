class Company {
    public companyName: string;
    private revenue: number;
    protected location: string;

    constructor(name: string, revenue: number, location: string) {
        this.companyName = name;
        this.revenue = revenue;
        this.location = location;
    }

    public getRevenue(): number {
        return this.revenue;
    }

}

class ITCompany extends Company {
    public displayDetails(): void {
        console.log("Company:", this.companyName);  // ✅
        console.log("Location:", this.location);    // ✅
        // console.log(this.revenue); ❌ ERROR
    }
}

let comp = new ITCompany("TechSoft", 1000000, "Hyderabad");

console.log(comp.companyName);     // ✅
console.log(comp.getRevenue());    // ✅
// console.log(comp.location); ❌
// console.log(comp.revenue); ❌

comp.displayDetails();
