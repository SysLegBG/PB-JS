function solve(company, adultTickets, kidsTickets, adultPrice, fee) {
    adultTickets = Number(adultTickets);
    kidsTickets = Number(kidsTickets);
    adultPrice = Number(adultPrice);
    fee = Number(fee);

    let kidsPrice = adultPrice * 0.30;
    let finalAdultTicketPrice = adultPrice + fee;
    let finalKidsTicketPrice = kidsPrice + fee;

    let totalPrice = (adultTickets * finalAdultTicketPrice) + (kidsTickets * finalKidsTicketPrice);
    let profit = totalPrice * 0.20;

    console.log(`The profit of your agency from ${company} tickets is ${profit.toFixed(2)} lv.`);

}

solve("WizzAir", 15, 5, 120, 40);
solve("Ryanair", 60, 23, 158.96, 39.12);