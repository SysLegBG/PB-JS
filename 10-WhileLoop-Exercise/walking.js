function solve(input){
    let steps = 0;

    while(true){
        let temp = input.shift();

        if(temp == "Going home"){
            temp = Number(input.shift());
            steps += temp;
            if(steps < 10000){
                console.log(`${10000 - steps} more steps to reach goal.`);
             }else{
                console.log("Goal reached! Good job!");
                console.log(`${steps - 10000} steps over the goal!`);
             } 
            break;
        }

        steps += Number(temp);

        if(steps >= 10000){
            console.log("Goal reached! Good job!");
            console.log(`${steps - 10000} steps over the goal!`);
            break;
        }
    }
}

solve([ '125', '250', '4000', '30', '2678', '4682' ])