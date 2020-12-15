function solve(num){
    num = Number(num);

    let sum = 1;

    for(i = 2; i <= num; i++){
        sum *= i;
    }

    console.log(sum);    
}

solve("8")