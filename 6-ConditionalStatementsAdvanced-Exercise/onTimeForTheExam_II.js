function solve(examHours, examMinutes, arriveHours, arriveMinutes){
    examHours = Number(examHours);
    examMinutes = Number(examMinutes);
    arriveHours = Number(arriveHours);
    arriveMinutes = Number(arriveMinutes);

    let examTime = (examHours * 60) + examMinutes;
    let arriveTime = (arriveHours * 60) + arriveMinutes;

    let arrival = "";
    
    if(arriveTime > examTime){
        arrival = "Late";
    }else if(examTime > arriveTime){
        arrival = "Early";
    }else{
        arrival = "On time";
    }

    switch(arrival){
        case "Late":
            
    }

solve("9", "30", "9", "50");
solve("9", "00", "10", "30");
//solve("10", "00", "10", "00");
