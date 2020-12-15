function solve(num){
    num = Number(num);

    for(i = 1; i <= 10; i++){
        let sum = num * i;
        console.log(`${i} * ${num} = ${sum}`);        
    }
}

solve("5");