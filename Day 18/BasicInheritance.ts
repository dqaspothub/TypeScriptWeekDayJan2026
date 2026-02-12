class Father {
    GoldProperty() {
        console.log("Hello from Parent");
    }

    landProperty(){
        console.log("I have land");  
    }
}

class Son extends Father {

    MutualFund(){
        console.log("I have mutualFunds");
        
    }
}

let obj = new Son();
obj.MutualFund();   // Inherited method
obj.landProperty();
obj.GoldProperty();


let obj1 = new Father();

obj1.GoldProperty();
obj1.landProperty();

