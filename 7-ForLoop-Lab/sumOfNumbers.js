function solve(digit){
    let sum = 0;

    for(i=0; i < digit.length; i++){
        sum += Number(digit[i]);
    }

    console.log(`The sum of the digits is:${sum}`);
    
}

solve("1234");
solve("564891");