function solve(inputNum){
    let num = Number(inputNum);

    let bonusPoints = 0;

    switch(true){
        case (num <= 100):
            bonusPoints += 5;
            break;
        case (num > 100 && num <= 1000):
            bonusPoints += (num * 0.2);
            break;
        case (num > 1000):
            bonusPoints += (num * 0.1);
            break;
    }

    if(num % 2 == 0){
        bonusPoints += 1;
    }

    if(num % 10 == 5){
        bonusPoints += 2;
    }

    console.log(bonusPoints);
    console.log(bonusPoints + num);   
}

solve("20");
solve("175");
solve("2703");
solve("15875");