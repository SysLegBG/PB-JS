function solve(input){
    let combinations = 0;
    let target = Number(input[0]);

    for(let i = 0; i <= target; i++){
        for (let j = 0; j <= target; j++) {
            for (let k = 0; k <= target; k++) {
                (i + j + k == target) ? combinations++ : combinations;                
            }            
        }
    }

    console.log(combinations);
    
}
