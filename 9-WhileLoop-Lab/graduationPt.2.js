function solve(input){
    let name = input.shift();
    let studentClass = 0;
    let averageGrade = 0;
    let lowGrade = 0;

    while(input.length > 0){
        let grade = Number(input.shift());
        if(grade < 4){
            lowGrade++;
            continue;
        }
        if(lowGrade == 2){
            console.log(`${name} has been excluded at ${studentClass} grade`);
            break;
        }        
        studentClass++;
        averageGrade += grade;
    }

    if(lowGrade == 2){
        console.log(`${name} has been excluded at ${studentClass + 1} grade`);
    }else{
        averageGrade /= 12;
        console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);
    }
    
    
}



  solve ([
    'Mimi', '5', '6',
    '5',    '6', '5',
    '6',    '6', '2',
    '3'
  ]);