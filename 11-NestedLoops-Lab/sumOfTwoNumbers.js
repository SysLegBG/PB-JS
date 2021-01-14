function solve(input){
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);
    let magicNum = Number(input[2]);

    let combinations = 0;
    let flag = false;

    for (let i = startNum; i <= endNum; i++) {
        for (let j = startNum; j <= endNum; j++) {
            combinations++;
            if(i + j == magicNum){
                console.log(`Combination N:${combinations} (${i} + ${j} = ${magicNum})`);
                flag = true;
                break;
            }
        }
        if(flag){
            break;
        }
    }

    if(!flag){
        console.log(`${combinations} combinations - neither equals ${magicNum}`);        
    }
}

solve([1,10,5])