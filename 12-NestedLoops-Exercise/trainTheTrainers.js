function solve(input){
    const n = Number(input.shift());
    let current = input.shift();
    let finalAvg = 0;
    let presentations = 0;

    while(current !== "Finish"){
        let avg = 0;
        for(let i = 0; i < n; i++){
            avg += Number(input.shift());
        }
        avg /= n;
        finalAvg += avg;
        presentations++;
        console.log(`${current} - ${(avg.toFixed(2))}.`);
        current = input.shift();
    }
    finalAvg /= presentations;
    console.log(`Student's final assessment is ${finalAvg.toFixed(2)}.`);    
}

solve([
    '2',
    'Objects and Classes',
    '5.77',
    '4.23',
    'Dictionaries',
    '4.62',
    '5.02',
    'RegEx',
    '2.88',
    '3.42',
    'Finish'
  ])