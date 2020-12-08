function solve(campaignDays, confectioners, cakes, waffles, pancakes) {
    campaignDays = Number(campaignDays);
    confectioners = Number(confectioners);
    cakes = Number(cakes);
    waffles = Number(waffles);
    pancakes = Number(pancakes);

    let cakeSinglePrice = 45.00;
    let waffleSinglePrice = 5.80;
    let pancakeSinglePrice = 3.20;

    let costsPercent = 0.125;

    let cakesPrice = cakes * cakeSinglePrice;
    let wafflesPrice = waffles * waffleSinglePrice;
    let pancakesPrice = pancakes * pancakeSinglePrice;

    let dayIncome = (cakesPrice + wafflesPrice + pancakesPrice) * confectioners;

    let total = dayIncome * campaignDays * (1 - costsPercent);

    console.log(total);    

}

solve("131", "5", "9", "33", "46")