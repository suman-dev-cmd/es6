//array destructure

const myProlang = ['js','php','java','go','python'];

let [p1,p2,p3,p4,p5] = myProlang;

console.log('my programing language is ',p1); //js

//find 1st and last element in array

let[c1,,,,c5] = myProlang;
console.log(`my programing language is ${c1} and ${c5}`); //js  python


//swap two value using destructuring

let a = 10;
let b = 20;

[a,b] = [b,a]

console.log(`a and b swap ${a} and ${b}`);