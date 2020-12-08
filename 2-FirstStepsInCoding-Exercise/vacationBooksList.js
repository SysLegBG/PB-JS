function solve(pages, readSpeed, days) {
    pages = Number(pages);
    readSpeed = Number(readSpeed);
    days = Number(days);

    var hoursPerDay = pages / readSpeed / days;

    console.log(hoursPerDay);
    
}

solve("432", "15", "4")