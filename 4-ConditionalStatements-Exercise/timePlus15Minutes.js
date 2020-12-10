function solve(inHours, inMinutes){
    inHours = Number(inHours);
    inMinutes = Number(inMinutes);

    let hours = inHours;
    let minutes = inMinutes + 15;

    if(minutes >= 60){
        minutes -= 60;
        hours += 1;
    }

    if(hours >= 24){
        hours -= 24;
    }

    if(minutes < 10){
        console.log(`${hours}:0${minutes}`);        
    }else{
        console.log(`${hours}:${minutes}`);        
    }
    
}

solve("1", "46");
solve("0", "01");
solve("23", "59");