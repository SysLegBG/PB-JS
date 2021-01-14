function solve(input){
    let current = input.shift();
    let primeSum = 0;
    let nonPrimeSum = 0;

    while(current !== "stop"){
        let isPrime = true;
        current = Number(current);

        if(current < 0){
            console.log("Number is negative.");
            current = input.shift();
            continue;
        }

        if(current == 1){
            isPrime = false;
            nonPrimeSum += current;
        }else{
            for(let i = 2; i < current; i++){
                if(current % i == 0){
                    isPrime = false;
                    nonPrimeSum += current;
                    break;
                }
            }
        }

        if(isPrime){
            primeSum += current;
        }
        
        current = input.shift();
    }

    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}

solve([ '19', '2', '7', "-14","16","20","45", 'stop' ])