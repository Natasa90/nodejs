// In JS we have 3 types of declaring variables : var, let and const.

var myNum = 10; // can be reasigned latter, can be redeclared within the same scope;

let myNum2 = 10; // can be reasigned latter, cannot be redeclared within the same scope; 

const myNym = 10; // cannot be reasigned latter nor redeclared within the same scope; 


// In JS we have types of variables:

let myNumber = 10; // typeof: number 

let myString = "I'm a string." // typeof: string; 

let myBoolean = false; // typeof: boolean; 

let myUndef; // => typeof: undefined; 

let myNull = null; // typeof: object (but with NO value assigned!); 

let myArray = [1,2,3,4,5]; // typeof: object (arrays are special types of object); 

let myObject = {a: "2", b: "1"} // typeof: object 

/* NaN is also a special type of var: we will get that output if we try to do, for example: 
console.log (myNumber - myString); => literally means Not A Number!
*/ 



