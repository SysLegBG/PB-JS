function solve(input){
    let index = 0;
    let days = Number(input[index++]);
    let totalWinCounter = 0;
    let totalRaisedMoney = 0;

    for(let d = 0; d < days; d++){
        let dayMoney = 0;
        let winCounter = 0;
        while(input[index++] != "Finish"){
            switch(input[index]){
                case "win":
                    dayMoney += 20;
                    winCounter++;
                    totalWinCounter++;
                    break;
                case "lose":
                    winCounter--;
                    totalWinCounter--;
                    break;
            }
        }
        (winCounter > 0) ? totalRaisedMoney += dayMoney * 1.1 : totalRaisedMoney += dayMoney;
    }

    if(totalWinCounter > 0){
        totalRaisedMoney *= 1.2;
        console.log(`You won the tournament! Total raised money: ${totalRaisedMoney.toFixed(2)}`);        
    }else{
        console.log(`You lost the tournament! Total raised money: ${totalRaisedMoney.toFixed(2)}`);  
    }
}

solve([
    '3',            'darts',
    'lose',         'handball',
    'lose',         'judo',
    'win',          'Finish',
    'snooker',      'lose',
    'swimming',     'lose',
    'squash',       'lose',
    'table tennis', 'win',
    'Finish',       'volleyball',
    'win',          'basketball',
    'win',          'Finish'
  ]);