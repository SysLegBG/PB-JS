function solve(input){
    let counter = 1;
    let flag = false;
    for(let rows = 1; rows <= Number(input[0]); rows++){
        let rowStr = "";
        for(let cols = 1; cols <= rows; cols++){
            rowStr +=`${counter} `            
            if(counter == Number(input[0])){
                flag = true;
                break;
            }
            counter++;
        }
        console.log(rowStr);
        if(flag){
            break;
        }
    }
}

solve(["7"])