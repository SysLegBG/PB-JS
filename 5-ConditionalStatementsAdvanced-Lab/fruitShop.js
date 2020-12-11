function solve(fruit, day, amount){
    amount = Number(amount);
    let price = 0;
    let check = "";

    switch(day){
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            switch(fruit){
                case "banana":
                    price = amount * 2.50;
                    break;
                case "apple":
                    price = amount * 1.20;
                    break;
                case "orange":
                    price = amount * 0.85;
                    break;
                case "grapefruit":
                    price = amount * 1.45;
                    break;
                case "kiwi":
                    price = amount * 2.70;
                    break;
                case "pineapple":
                    price = amount * 5.50;
                    break;
                case "grapes":
                    price = amount * 3.85;
                    break;
                default:
                    check = "error";
                    break;
            }
            break;
        case "Saturday":
        case "Sunday":
            switch(fruit){
                case "banana":
                    price = amount * 2.70;
                    break;
                case "apple":
                    price = amount * 1.25;
                    break;
                case "orange":
                    price = amount * 0.90;
                    break;
                case "grapefruit":
                    price = amount * 1.60;
                    break;
                case "kiwi":
                    price = amount * 3.00;
                    break;
                case "pineapple":
                    price = amount * 5.60;
                    break;
                case "grapes":
                    price = amount * 4.20;
                    break;
                default:
                    check = "error";
                    break;
            }
            break;
        default:
            check = "error";
            break;
    }

    if(check === "error"){
        console.log(check);        
    }else{
        console.log(price.toFixed(2));
    }
    
}

solve("apple", "Tuesday", "2");
solve("orange", "Sunday", "3");
solve("kiwi", "Monday", "2.5");
solve("grapes", "Saturday", "0.5");
solve("tomato", "Monday", "0.5");