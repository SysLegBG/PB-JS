function solve(input){
    let maxPoorGrades = input.shift();
    let poorGrades = 0;
    let averageScore = 0;
    let lastProblem = "";
    let solvedProblems = 0;

    while(true){
        let temp = input.shift();
        
        if(temp == "Enough"){
            averageScore /= solvedProblems;
            console.log(`Average score: ${averageScore.toFixed(2)}`);
            console.log(`Number of problems: ${solvedProblems}`);
            console.log(`Last problem: ${lastProblem}`);
            break;
        }

        lastProblem = temp;

        temp = Number(input.shift());
        
        if(temp <= 4){
            poorGrades++
            if(poorGrades == maxPoorGrades){
                console.log(`You need a break, ${poorGrades} poor grades.`);
                break;
            }
        }

        averageScore += temp;
        solvedProblems++;
    }    
}

solve([ '4', 'Stone Age', '5', 'Freedom', '5', 'Storage', '3', 'Enough' ]);