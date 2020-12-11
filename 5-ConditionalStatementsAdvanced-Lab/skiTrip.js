function solve(days, room, rating){
    days = Number(days);
    let nights = days - 1;
    let roomPrice = 0;

    switch(room){
        case "room for one person":
            roomPrice = 18;
            break;
        case "apartment":
            roomPrice = 25;
            break;
        case "president apartment":
            roomPrice = 35;
            break;
        default:
            break;
    }

    let tripPrice = nights * roomPrice;

    switch(true){
        case (room === "apartment" && days < 10):
            tripPrice = tripPrice * 0.70;
            break;
        case (room === "apartment" && days >= 10 && days <= 15):
            tripPrice = tripPrice * 0.65;
            break;
        case (room === "apartment" && days > 15):
            tripPrice = tripPrice * 0.50;
            break;
        case (room === "president apartment" && days < 10):
            tripPrice = tripPrice * 0.90;
            break;
        case (room === "president apartment" && days >= 10 && days <= 15):
            tripPrice = tripPrice * 0.85;
            break;
        case (room === "president apartment" && days > 15):
            tripPrice = tripPrice * 0.80;
            break;
        default:
            break;
    }

    if(rating === "positive"){
        tripPrice = tripPrice * 1.25;
    }else{
        tripPrice = tripPrice * 0.90;
    }

    console.log(tripPrice.toFixed(2));    
}

solve("30", "president apartment", "negative");
solve("12", "room for one person", "positive");
solve("2", "apartment", "positive");