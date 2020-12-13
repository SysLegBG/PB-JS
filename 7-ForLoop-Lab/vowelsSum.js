function solve(text){
    let points = 0;

    for(i=0; i<text.length; i++){
        switch(text[i]){
            case "a":
                points+=1;
                break;
            case "e":
                points+=2;
                break;
            case "i":
                points+=3;
                break;
            case "o":
                points+=4;
                break;
            case "u":
                points+=5;
                break;
        }
    }
    console.log(points);    
}

solve("beer");