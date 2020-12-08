function solve(strawberryPrice, bananas, oranges, raspberries, strawberries) {
    strawberryPrice = Number(strawberryPrice);
    bananas = Number(bananas);
    oranges = Number(oranges);
    raspberries = Number(raspberries);
    strawberries = Number(strawberries);

    let raspberriesPrice = strawberryPrice * 0.5;
    let orangesPrice = raspberriesPrice * 0.6;
    let bananasPrice = raspberriesPrice * 0.2;

    let neededMoney = (strawberries * strawberryPrice) + (raspberries * raspberriesPrice) + (oranges * orangesPrice) + (bananas * bananasPrice);

    console.log(neededMoney);
    
}

solve("63.5", "3.57", "6.35", "8.15", "2.5")