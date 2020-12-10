function solve(inputSpeed){
    let speed = Number(inputSpeed);

    let speedInfo = "";

    switch(true){
        case (speed <= 10):
            speedInfo = "slow";
            break;
        case (speed <= 50):
            speedInfo = "average";
            break;
        case (speed <= 150):
            speedInfo = "fast";
            break;
        case (speed <= 1000):
            speedInfo = "ultra fast";
            break;
        default:
            speedInfo = "extremely fast"
            break;
    }
    
    console.log(speedInfo);    
}

solve("8");
solve("49.5");
solve("126");
solve("160");
solve("3500");