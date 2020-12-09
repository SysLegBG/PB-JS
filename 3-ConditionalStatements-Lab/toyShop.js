function solve(tripPrice, puzzleCount, dollCount, bearCount, minionsCount, truckCount) {
    tripPrice = Number(tripPrice);
    puzzleCount = Number(puzzleCount);
    dollCount = Number(dollCount);
    bearCount = Number(bearCount);
    minionsCount = Number(minionsCount);
    truckCount = Number(truckCount);

    let puzzlePrice = 2.60;
    let dollPrice = 3.00;
    let bearPrice = 4.10;
    let minionPrice = 8.20;
    let truckPrice = 2.00;

    let totalMoney = (puzzleCount * puzzlePrice) + (dollCount * dollPrice) + (bearCount * bearPrice) + (minionsCount * minionPrice) + (truckCount * truckPrice);
    let toyCount = puzzleCount + dollCount + bearCount + minionsCount + truckCount;

    if(toyCount >= 50){
        totalMoney *= 0.75;
    }

    totalMoney *= 0.9;

    if(totalMoney >= tripPrice){
        totalMoney -= tripPrice;
        console.log(`Yes! ${totalMoney.toFixed(2)} lv left.`);        
    }else{
        tripPrice -= totalMoney;
        console.log(`Not enough money! ${tripPrice.toFixed(2)} lv needed.`);        
    }
}

solve("40.8", "20", "25", "30", "50", "10");
solve("320", "8", "2", "5", "5", "1");