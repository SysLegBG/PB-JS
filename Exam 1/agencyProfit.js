function solve(companyName, adultTickets, kidTickets, adultTicketPrice, fee) {
    let kidTicketPrice = (Number(adultTicketPrice) * 0.3) + Number(fee);
    adultTicketPrice += fee;

    let totalAdult = Number(adultTickets) * Number(adultTicketPrice);
    let totalKid = Number(kidTickets) * kidTicketPrice;

    let total = (totalAdult + totalKid) * 0.2;

    console.log(`The profit of your agency from ${companyName} tickets is ${total.toFixed(2)} lv.`);
}

solve("WizzAir", 15, 5, 120, 40);
solve("Ryanair", 60, 23, 158.96, 39.12);