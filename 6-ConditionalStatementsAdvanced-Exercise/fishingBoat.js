function solve(budget, season, fishermanCount){
    budget = Number(budget);
    fishermanCount = Number(fishermanCount);

    let shipPrice = 0;
    let discount = 0;

    switch(season){
        case "Spring":
            shipPrice = 3000;
            break;
        case "Summer":
        case "Autumn":
            shipPrice = 4200;
            break;
        case "Winter":
            shipPrice = 2600;
            break;
    }

    switch (true){
        case (fishermanCount <= 6):
            discount = 0.10;
            break;
        case (fishermanCount >= 7 && fishermanCount <= 11):
            discount = 0.15;
            break;
        case (fishermanCount >= 12):
            discount = 0.25;
            break;
    }

    /*
    if(fishermanCount % 2 == 0 && season != "Autumn"){
        discount += 0.05;
    }

    discount = 1 - discount;
    let finalPrice = shipPrice * discount;
    */
   discount = 1 - discount;
   let finalPrice = shipPrice * discount;
   
   if(fishermanCount % 2 == 0 && season != "Autumn"){
   finalPrice = finalPrice * 0.95;
   }

    if(budget >= finalPrice){
        let moneyLeft = budget - finalPrice;
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);        
    }else{
        let moneyNeeded = finalPrice - budget;
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);        
    }
}

solve("3000", "Summer", "11");
solve("3600", "Autumn", "6");
solve("2000", "Winter", "13");