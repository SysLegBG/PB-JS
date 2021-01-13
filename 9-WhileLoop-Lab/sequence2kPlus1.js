function solve(input){
    let num = Number(input[0]);
    let pNum = 1

    while(pNum <= num){
        console.log(pNum);
        pNum = pNum * 2 + 1;
    }
}

solve(["31"])