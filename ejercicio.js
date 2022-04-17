
function sum(a,b){
    if(isNaN(a,b)){
        console.log('no es un número')
    }else{
        console.log('son números')
    }
    return a + b
}

console.log(sum(3,6))



function sum(a,b){
    try{
        if(isNaN(a,b)) throw "empty";
    }catch(err){
        console.log(err)
    }
    return a + b
}

console.log(sum())