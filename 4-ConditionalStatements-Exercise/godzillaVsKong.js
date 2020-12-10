function solve(filmBudget, statistsNumber, clothPrice){
    filmBudget = Number(filmBudget);
    statistsNumber = Number(statistsNumber);
    clothPrice = Number(clothPrice);
    
    let decorPrice = filmBudget * .1;
    let clothesPrice = statistsNumber * clothPrice;

    if(statistsNumber > 150){
        clothesPrice *= .9;
    }

    let filmPrice = decorPrice + clothesPrice;

    if(filmBudget < filmPrice){
        let a = filmPrice - filmBudget;
        console.log("Not enough money!");
        console.log(`Wingard needs ${a.toFixed(2)} leva more.`);        
    }else{
        let a = filmBudget - filmPrice;
        console.log("Action!");
        console.log(`Wingard starts filming with ${a.toFixed(2)} leva left.`);        
    }
}

//solve("20000", "120", "55.5");
solve("15437.62", "186", "57.99");
solve("9587.88", "222", "55.68");