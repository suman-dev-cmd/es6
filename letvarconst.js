// var function scope

function varJS(love){
    if(love){
        var name = 'suman';
    }
    console.log(name)
}
varJS(true);


//let and const block scope

function letJS(love){
    if(love){
        let name = 'suman'; 
        console.log(name);
    }
}
letJS(true);
function constJS(love){
    if(love){
        const name = 'suman';
        console.log(name);
    }
}
constJS(true);