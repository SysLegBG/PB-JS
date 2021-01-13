function solve(input){
    let balance = 0;
    let a = input.shift();

    while(true){
        if(a == "NoMoreMoney"){
            break;
        }
        if(a < 0){
            console.log("Invalid operation!")
            break;
        }
        a = Number(a);
        balance += a;
        console.log(`Increase: ${a.toFixed(2)}`);
        
        a = input.shift();
    }

    console.log(`Total: ${balance.toFixed(2)}`);
    
}

solve([ '5.51', '69.42', '100', 'NoMoreMoney' ]);
//solve(["120","45.55","-150"])