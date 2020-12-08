function solve(rent) {
    rent = Number(rent);

    let cakePrice = rent * 0.2;
    let drinksPrice = cakePrice * 0.55;
    let animatorPrice = rent / 3;

    let total = rent + cakePrice + drinksPrice + animatorPrice;

    console.log(total);
    
}

solve("3720")