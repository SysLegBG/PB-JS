function solve(input){
    let index = 0;
    let temp = input[index];

    while(temp != "End"){
        let town = temp;
        index++;
        let tripMoney = Number(input[index]);
        let savedMoney = 0
        index++;
        while(savedMoney < tripMoney){
             savedMoney += Number(input[index]);
             if(savedMoney >= tripMoney){
                 console.log(`Going to ${town}!`);                 
             }
             index++
        }
        temp = input[index];
    }
}

solve([
    'Greece', '1000', '200',
    '200',    '300',  '100',
    '150',    '240',  'Spain',
    '1200',   '300',  '500',
    '193',    '423',  'End',
    ''
  ]
  );