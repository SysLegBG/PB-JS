function solve(budget, season){
    budget = Number(budget);

    let destination = "";
    let place = "";
    let budgetAmount = 0;

    switch(true){
        case (budget <= 100):
            destination = "Bulgaria";
            if(season == "summer"){
                budgetAmount = 0.30;
            }else{
                budgetAmount = 0.70;
            }
            break;
        case (budget <= 1000):
            destination = "Balkans";
            if(season == "summer"){
                budgetAmount = 0.40;
            }else{
                budgetAmount = 0.80;
            }
            break;
        case (budget > 1000):
            destination = "Europe";
            budgetAmount = 0.90;
            break;
    }

    switch(true){
        case (destination == "Europe"):
        case (season == "winter"):        
            place = "Hotel";
            break;
        case (season == "summer"):
            place = "Camp";
            break;     
    }

    let moneySpent = budget * budgetAmount;

    console.log(`Somewhere in ${destination}`);
    console.log(`${place} - ${moneySpent.toFixed(2)}`);
}

solve("1500", "summer");