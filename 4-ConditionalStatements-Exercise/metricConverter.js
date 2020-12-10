function solve(distance, input, output){
    distance = Number(distance);

    switch(input){
        case "m":
            distance *= 1000;
            break;
        case "cm":
            distance *= 10;
            break;
    }

    switch(output){
        case "m":
            distance /= 1000;
            break;
        case "cm":
            distance /= 10;
            break;
    }

    console.log(distance.toFixed(3));
    
}

solve("12", "mm", "m");
solve("150", "m", "cm");
solve("45", "cm", "mm");