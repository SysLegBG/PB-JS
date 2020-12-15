function solve(fuel, fuelCons, laps){
    fuel = Number(fuel);
    fuelCons = Number(fuelCons);
    laps = Number(laps);

    let lap = 0;
    let won = true;

    for(i=0; i < laps; i++){
        if(fuel < fuelCons){
            won = false;      
            break;
        }
        fuel -= fuelCons;
        fuelCons -= 0.01;
        lap++;
    }

    if(won){
        console.log("Congrats! You won the race!");
    }else{
        console.log(`You are out of fuel in round ${lap}!`);
    }        
}

//solve("70", "6.5", "10");
solve("50", "4.3", "30");