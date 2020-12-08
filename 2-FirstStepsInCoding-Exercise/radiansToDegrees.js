function solve(radians) {
    radians = Number(radians);
    
    let degrees = radians * 180 / Math.PI;

    console.log(degrees.toFixed(0));
    
}

solve("3.1416");