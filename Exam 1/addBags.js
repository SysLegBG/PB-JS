function solve(kgPrice, kgBag, days, bags) {
    kgPrice = Number(kgPrice);
    kgBag = Number(kgBag);
    days = Number(days);
    bags = Number(bags);

    let total = 0;

    (kgBag < 10) ? total += bags * (kgPrice * 0.2) : (kgBag > 20) ? total += bags * kgPrice : total += bags * (kgPrice * 0.5);
    (days > 30) ? total *= 1.1 : (days < 7) ? total *= 1.4 : total *= 1.15;

    console.log(`The total price of bags is: ${total.toFixed(2)} lv. `);

}

solve(30, 18, 15, 2)