

class Student {
    name!: string;
    age!: number;
    address!: string;
}

class Teacher {
    name!: string;
    age!: number;
    address!: string;
}

class Principal {
    name!: string;
    age!: number;
    address!: string;
}

/* 
Problem:

Same properties repeated 3 times

If school adds new field (email), you must change 3 classes

More maintenance

More chances of mistake */


class Persons {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
}

class Studentss extends Persons {
    rollNumber!: number;
}

class Teachers extends Persons {
    subject!: string;
}

class Principals extends Persons {
    officeNumber!: string;
}


let s1 = new Persons("Kannathasan",30,"test");

