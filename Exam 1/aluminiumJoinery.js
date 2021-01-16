function solve(windowNumber, windowType, delivery) {
    windowNumber = Number(windowNumber);

    let windowPrice = 0
    let discount = 1;
    let deliveryPrice = 0;

    switch (windowType) {
        case "90X130":
            windowPrice = 110;
            (windowNumber > 60) ? discount = 0.92 : (windowNumber > 30) ? discount = 0.95 : discount = 1;
            break;
        case "100X150":
            windowPrice = 140;
            (windowNumber > 80) ? discount = 0.90 : (windowNumber > 40) ? discount = 0.94 : discount = 1;
            break;
        case "130X180":
            windowPrice = 190;
            (windowNumber > 50) ? discount = 0.88 : (windowNumber > 20) ? discount = 0.93 : discount = 1;
            break;
        case "200X300":
            windowPrice = 250;
            (windowNumber > 50) ? discount = 0.86 : (windowNumber > 25) ? discount = 0.91 : discount = 1;
            break;
    }

    if (delivery == "With delivery") {
        deliveryPrice = 60;
    }

    let total = windowNumber * windowPrice * discount + deliveryPrice;

    if (windowNumber > 99) {
        total *= 0.96;
    }

    (windowNumber < 10) ? console.log("Invalid order") : console.log(`${total.toFixed(2)} BGN`);
}

solve(40,
    "90X130",
    "Without delivery"
)