class Animals {
    makeSound(): void {
        console.log("Animal makes sound");
    }
}

class Dog extends Animals {
    makeSound(): void {
        console.log("Dog barks");
    }
}

let d = new Dog();
d.makeSound();   // Dog barks


/* 
✔ Same method name
✔ Same parameters
✔ Child changes implementation

That is overriding.

Why Do We Need Method Overriding?

Because sometimes:

✔ Base class provides common logic
✔ Child class needs special behavior

Important Rules of Method Overriding

✔ Must be in Parent-Child relationship
✔ Same method name
✔ Same parameter list
✔ Return type should be same
✔ Can call parent using super.methodName()


| Feature          | Overloading | Overriding      |
| ---------------- | ----------- | --------------- |
| Same class       | ✅ Yes       | ❌ No            |
| Parent-child     | ❌ No        | ✅ Yes           |
| Same method name | ✅ Yes       | ✅ Yes           |
| Parameter change | ✅ Yes       | ❌ No            |
| Purpose          | Flexibility | Change behavior |


*/

class parentss
{

    education() : void{

        console.log("I am SSLC passed");  

    }
}

class YoungerSon extends parentss
{
education() : void{

        console.log("I am BE passed");  

    }

}

let l1 = new YoungerSon();
l1.education()
