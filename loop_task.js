/* 
Task Instructions: 
Print true four times.
Create an array [1, 2, 3, 4, 5] and modify it so that each element is multiplied by an increasing number:
Multiply the first element by 3, the second by 4, the third by 5, and so on.
Example: 1 * 3, 2 * 4, 3 * 5, 4 * 6, 5 * 7...
The expected output is:
[3, 8, 15, 24, 35]
After printing the modified array, print true one more time.
*/

let myBoolean = true;
let myArray = [1,2,3,4,5,6,7,8,9]

for (let i = 0; i < 5; i++) {
  if (i === 4) {
    for (let j = 0; j <= myArray.length - 1; j++) {
       myArray[j] = myArray[j] * (j + 3)
    };
      console.log(myArray)
    };
  console.log(myBoolean)
}
