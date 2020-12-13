function solve(numberInput){
    let number = Number(numberInput);

    for(i=0; i<=number; i+=2){
        console.log(Math.pow(2, i));        
    }
}

solve("7");