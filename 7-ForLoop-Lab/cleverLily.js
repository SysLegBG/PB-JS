function solve(age, washPrice, toyPrice){
    age = Number(age);
    washPrice = Number(washPrice);
    toyPrice = Number(toyPrice);

    let money = 0;
    let moneyGift = 10;
    let toys = 0;

    for(i = 1; i <= age; i++){
        if(i % 2 === 0){
            money += moneyGift;
            money --;
            moneyGift += 10;
        }else{
            toys++;
        }
    }

    money += (toys * toyPrice);

    if(money >= washPrice){
        let balance = money - washPrice;
        console.log(`Yes! ${balance.toFixed(2)}`);        
    }else{
        let balance = washPrice - money;
        console.log(`No! ${balance.toFixed(2)}`);        
    }
}

solve("10", "170", "6");
solve("21", "1570.98", "3");