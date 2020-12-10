function solve(worldRecord, distance, timePerMeter){
    worldRecord = Number(worldRecord);
    distance = Number(distance);
    timePerMeter = Number(timePerMeter);

    let time = distance * timePerMeter;
    let resistanceTime = (Math.round(distance / 15) * 12.5);
    time += resistanceTime;

    if(time < worldRecord){
        console.log(`Yes, he succeeded! The new world record is ${time.toFixed(2)} seconds.`);        
    }else{
        let a = time - worldRecord;
        console.log(`No, he failed! He was ${a.toFixed(2)} seconds slower.`);        
    }
}

//solve("10464", "1500", "20");
solve("55555.67", "3017", "5.03")