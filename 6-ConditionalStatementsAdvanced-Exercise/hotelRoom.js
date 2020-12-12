function solve(month, nightsCount){
    nightsCount = Number(nightsCount);

    let studioPrice = 0;
    let apartmentPrice = 0;

    switch(true){
        case (month == "May" || month == "October"):
            studioPrice = 50.00;
            apartmentPrice = 65.00;
            if(nightsCount > 14){
                studioPrice = studioPrice * 0.70;
            }else if(nightsCount > 7){
                studioPrice = studioPrice * 0.95;
            }
            break;
        case (month == "June" || month == "September"):
            studioPrice = 75.20;
            apartmentPrice = 68.70;
            if(nightsCount > 14){
                studioPrice = studioPrice * 0.80;
            }
            break;
        case (month == "July" || month == "August"):
            studioPrice = 76.00;
            apartmentPrice = 77.00;
            break;
    }

    if(nightsCount > 14){
        apartmentPrice = apartmentPrice * 0.90;
    }

    let totalApartmentPrice = apartmentPrice * nightsCount;
    let totalStudioPrice = studioPrice * nightsCount;

    console.log(`Apartment: ${totalApartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${totalStudioPrice.toFixed(2)} lv.`);
}

solve("May", "15");
solve("June", "14");
solve("August", "20");