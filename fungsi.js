console.log ('fungsi kedua');

const add = (a, b) => a + b;
console.log(add(2, 3));
const multiply = (a, b) => a * b;
console.log(multiply(2, 3));    
if (true) 
    console.log('ini adalah fungsi ketiga');    
const subtract = (a, b) => a - b;
console.log(subtract(5, 3));

const multiplyAndAdd = (a, b, c) => multiply(a, b) + add(b, c);
console.log(multiplyAndAdd(2, 3, 4)); // Output: 10