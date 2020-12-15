function solve(input){
    let n = Number(input.shift());
    let num = Number(input.shift());

    for(i = 1; i < n; i++){
        let tNum = Number(input.shift());
        if(tNum < num){
            num = tNum;
        }
    }

    console.log(num);    
}

solve(["2", "100", "99"])