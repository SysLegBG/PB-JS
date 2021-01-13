function solve(input){
    let num = Number(input.shift());
    let tempN = input.shift();

    while(input.length > 0 && tempN != "Stop"){
        tempN = Number(tempN);
        if(tempN > num){
            num = tempN;
        }
        tempN = input.shift();
    }

    console.log(num);
    
}

//solve (["100", "99", "80"]);
solve (["999", "Stop"])