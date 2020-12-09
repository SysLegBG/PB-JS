function solve(figure, num1, num2){
    num1 = Number(num1);
    num2 = Number(num2);

    let area = 0;

    switch(figure){
        case "square":
            area = num1 * num1;
            break;
        case "rectangle":
            area = num1 * num2;
            break;
        case "circle":
            area = Math.PI * Math.pow(num1, 2);
            break;
        case "triangle":
            area = 0.5 * num1 * num2;
            break;
    }

    console.log(area.toFixed(3));
    
}

solve("square", "5");
solve("rectangle", "7", "2.5");
solve("circle", "6");
solve("triangle", "4.5", "20")