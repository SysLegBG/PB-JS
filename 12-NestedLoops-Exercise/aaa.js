function rooms(month, nightsNum) {
 
    nightsNum = Number(nightsNum);
    let totalPrice = 0;
    let type = "";
 
    if (month == "May" || month == "October") {
        totalPrice = nightsNum * 50.00;
    } else if (month == "June" || month == "September") {
        totalPrice = nightsNum * 75.20;
    } else if (month == "July" || month == "August") {
        totalPrice = nightsNum * 76.00;
    }
 
    if (month == "May" || month == "October") {
        totalPrice = nightsNum * 65.00;
    } else if (month == "June" || month == "September") {
        totalPrice = nightsNum * 68.70;
    } else if (month == "July" || month == "August") {
        totalPrice = nightsNum * 77.00;
    }
 
    if (nightsNum > 7 && month == "May" || month == "October") {
        totalPrice = totalPrice * 0.95;
    } else if (nightsNum > 14 && month == "May" || month == "October") {
        totalPrice = totalPrice * 0.70;
    } else if (nightsNum > 14 && month == "June" || month == "September") {
        totalPrice = totalPrice * 0.80;
    } else if (nightsNum > 14) {
        totalPrice = totalPrice * 0.90;
    }
 
    console.log(`Aartment: ${totalPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${totalPrice.toFixed(2)} lv.`);
}

rooms("May", "15");