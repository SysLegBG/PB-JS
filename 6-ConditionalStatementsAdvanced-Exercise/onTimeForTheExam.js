function solve(examHours, examMinutes, arriveHours, arriveMinutes){
    examHours = Number(examHours);
    examMinutes = Number(examMinutes);
    arriveHours = Number(arriveHours);
    arriveMinutes = Number(arriveMinutes);

    let examTime = (examHours * 60) + examMinutes;
    let arriveTime = (arriveHours * 60) + arriveMinutes;
    
    if(arriveTime > examTime){
        console.log("Late");
        
        let timeDiff = arriveTime - examTime;

        if(timeDiff > 59){
            let hours = Math.floor(timeDiff / 60);
            let minutes = timeDiff % 60;

            if(minutes < 10){
                minutes = `0${minutes}`;
            }

            console.log(`${hours}:${minutes} hours after the start`);            
        }else{
            console.log(`${timeDiff} minutes after the start`);            
        }
    }else if(examTime - 30 > arriveTime){
        console.log("Early");
        
        let timeDiff = examTime - arriveTime;

        if(timeDiff > 59){
            let hours = Math.floor(timeDiff / 60);
            let minutes = timeDiff % 60;

            if(minutes < 10){
                minutes = `0${minutes}`
            }

            console.log(`${hours}:${minutes} hours before the start`);            
        }else{
            console.log(`${timeDiff} minutes before the start`);            
        }
    }else if(examTime == arriveTime){
        console.log("On time");
    }else{
        console.log("On time");

        let timeDiff = examTime - arriveTime;

        if(timeDiff > 59){
            let hours = Math.floor(timeDiff / 60);
            let minutes = timeDiff % 60;

            if(minutes < 10){
                minutes = `0${minutes}`
            }

            console.log(`${hours}:${minutes} hours before the start`);            
        }else{
            console.log(`${timeDiff} minutes before the start`);
        }
    }
}

//solve("9", "30", "9", "50");
//solve("9", "00", "10", "30");
//solve("10", "00", "10", "00");
//solve("9", "00", "8", "30");
//solve("14", "00", "13", "55");
//solve("11", "30", "10", "55");
//solve("16", "00", "15", "00");
//solve("11", "30", "8", "12");
solve("11", "30", "12", "29");