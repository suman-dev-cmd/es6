const prob1 = new Promise((resolve,react)=>{
    setTimeout(()=>{
        let roll_no = [1,2,3,4];
        resolve(roll_no);
    },2000)
});

async function getData(){
    const roll_data=await prob1;
    console.log(roll_data);
}

getData();