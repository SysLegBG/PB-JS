function solve(day){
    day = Number(day);

    let txt = "";

    switch(day){
        case 1:
            txt = "Monday";
            break;
        case 2:
            txt = "Tuesday";
            break;
        case 3:
            txt = "Wednesday";
            break;
        case 4:
            txt = "Thursday";
            break;
        case 5:
            txt = "Friday";
            break;
        case 6:
            txt = "Saturday";
            break;
        case 7:
            txt = "Sunday";
            break;
        default:
            txt = "Error";
            break;
    }

    console.log(txt);
    
}

solve("5");