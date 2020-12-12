function solve(projectionType, rows, columns){
    rows = Number(rows);
    columns = Number(columns);

    let ticketPrice = 0;

    switch(projectionType){
        case "Premiere":
            ticketPrice = 12.0;
            break;
        case "Normal":
            ticketPrice = 7.5;
            break;
        case "Discount":
            ticketPrice = 5.0;
            break;
        default:
            break;
    }

    let income = rows * columns * ticketPrice;

    console.log(`${income.toFixed(2)} leva`);    
}

solve("Premiere", "10", "12");
solve("Normal", "21", "13");
solve("Discount", "12", "30")