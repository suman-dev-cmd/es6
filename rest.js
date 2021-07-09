//using rest operator

const sum=(...inputs)=>{
    let total = 0;
    for(let i of inputs){
        total=total+i;
    }
    console.log(total);
};

sum(1,2,3,4,5,6,7);

