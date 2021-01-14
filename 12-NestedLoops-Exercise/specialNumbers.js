function solve(input){
    const n = Number(input[0]);
    let output = "";

    for(let i = 1111; i <= 9999; i++){
        let currentNum = String(i);
        let isSpecial = true;
        for(let j = 0; j < currentNum.length; j++){
            if(n % Number(currentNum.charAt(j)) !== 0){
                isSpecial = false;
                break;
            }
        }
        if(isSpecial){
            output += `${currentNum} `;
        }
    }
    console.log(output);    
}

solve(["16"]);