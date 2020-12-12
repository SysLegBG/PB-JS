function solve(flowerType, flowerCount, budget){
    flowerCount = Number(flowerCount);
    budget = Number(budget);

    let flowerPrice = 0;
    let discount = 0;

    switch(flowerType){
        case "Roses":
            flowerPrice = 5.00;
            break;
        case "Dahlias":
            flowerPrice = 3.80;
            break;
        case "Tulips":
            flowerPrice = 2.80;
            break;
        case "Narcissus":
            flowerPrice = 3.00;
            break;
        case "Gladiolus":
            flowerPrice = 2.50;
            break;
    }

    switch(true){
        case (flowerCount > 80 && flowerType == "Roses"):
            discount = -0.10;
            break;
        case (flowerCount > 90 && flowerType == "Dahlias"):
        case (flowerCount > 80 && flowerType == "Tulips"):
            discount = -0.15;
            break;
        case (flowerCount < 120 && flowerType == "Narcissus"):
            discount = 0.15;
            break;
        case (flowerCount < 80 && flowerType == "Gladiolus"):
            discount = 0.20;
            break;        
    }

    let finalPrice = (flowerCount * flowerPrice) * (1 + discount);
    let moneyLeft = budget - finalPrice;
    let moneyNeeded = finalPrice - budget;

    if(budget >= finalPrice){
        console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${moneyLeft.toFixed(2)} leva left.`);        
    }else{
        console.log(`Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`);        
    }
}

solve("Roses", "55", "250");
solve("Tulips", "88", "260");
solve("Narcissus", "119", "360");