interface Fathers {
    showProperty(): void;
}

interface Mothers {
    showProperty(): void;
}

class Child implements Fathers, Mothers {
    showProperty(): void {
        console.log("Child decides implementation");
    }
}


/*         GrandParent
            |
      showProperty()
            |
        ----------------
        |              |
     Father          Mother
 showProperty()   showProperty()
        |              |
        --------- -----------
                |
              Child
         ??? Which one ???


         Same method name

Different implementation

No clear priority

If language doesn’t define strict rule,
it leads to ambiguity and bugs.

That’s why:

👉 TypeScript (like Java) does NOT allow multiple inheritance with classes.
 */


interface Fatherss {
    showProperty(): void;
}

interface Motherss {
    showProperty(): void;
}

class Childs implements Fatherss, Motherss {
    showProperty(): void {
        console.log("Child decides implementation");
    }
}
