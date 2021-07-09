//using spread operator

const sum =(a,b,c)=>{
    console.log(a+b+c)
}

const arr = [1,2,3];
sum(...arr);

const arr1 = [1,2,3];
const arr2 = [2,3,4];

console.log([...arr1,...arr2]); //concat two array

console.log([...arr,5,6]) //push element