const evens = [2,4,6,8,10]; //even number of array
 
//find out the odd number array

const odds = evens.map(v=>v+1);

// console.log(odds); 
//[ 3, 5, 7, 9, 11 ]

var nums = evens.map((v, i) => v + i);

// console.log(nums); 
//[ 2, 5, 8, 11, 14 ]

var pairs = evens.map(v => ({even: v, odd: v + 1}));

// console.log(pairs);
// [
//     { even: 2, odd: 3 },
//     { even: 4, odd: 5 },
//     { even: 6, odd: 7 },
//     { even: 8, odd: 9 },
//     { even: 10, odd: 11 }
// ]
const fives = [];
nums.forEach(v => {
    if (v % 5 === 0)
      fives.push(v);
});

console.log(fives); 
//[5]

//default parameters

const sum=(a,b=5)=>console.log(a+b);

sum(3);