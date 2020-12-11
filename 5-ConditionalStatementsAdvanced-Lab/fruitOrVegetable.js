function solve(input){
    let type = "";

    switch(input){
        case "banana":
        case "apple":
        case "kiwi":
        case "cherry":
        case "lemon":
        case "grapes":
            type = "fruit";
            break;
        case "tomato":
        case "cucumber":
        case "pepper":
        case "carrot":
            type = "vegetable";
            break;
        default:
            type = "unknown";
            break;
    }
    console.log(type);
    
}

solve("banana");
solve("apple");
solve("tomato");
solve("water");