function solve(input){
    let vacationPrice = Number(input.shift());
    let savedMoney = Number(input.shift());
    let spendCounter = 0;
    let days = 0;

    while(true){
        let temp = input.shift();

        if(temp == "spend"){
            temp = Number(input.shift());
            savedMoney -= temp;
            spendCounter++;
            if(savedMoney < 0){
                savedMoney = 0;
            }
        }else{
            temp = Number(input.shift());
            savedMoney += temp;
            spendCounter = 0;
        }

        days++;

        if(spendCounter == 5){
            console.log("You can't save the money.");
            console.log(days);
            break;            
        }

        if(savedMoney >= vacationPrice){
            console.log(`You saved the money for ${days} days.`);
            break;
        }
    }
}

solve([
    '250',   '150',
    'spend', '50',
    'spend', '50',
    'save',  '100',
    'save',  '100'
  ])