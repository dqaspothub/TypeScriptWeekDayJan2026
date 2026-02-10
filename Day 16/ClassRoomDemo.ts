class calculator{

    add(a: number,b: number): number{

        return a+b;

    }
   
    sub(a : number,b: number): number{

        return a-b;

    }

}

let cal = new calculator();

console.log(cal.add(80,90));
console.log(cal.sub(30,20));


//Function demo

function addition(a: number,b: number): number{
    return a+b;
}

addition(10,30);
