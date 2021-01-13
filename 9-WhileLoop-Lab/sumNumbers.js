function solve(input){
    let targetNum = Number(input.shift());
    let sum = 0;

    while(sum < targetNum){
        let num = Number(input.shift());
        sum += num;
    }

    console.log(sum);
    
}

solve(["100","10","20","30","40"])