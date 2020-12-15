function solve(y1, y2){
    y1 = Number(y1);
    y2 = Number(y2);

    for(i = y1; i <= y2; i += 4){
        console.log(i);        
    }
}

//solve("1908", "1919");
//solve("2000", "2011");
solve("2020", "2032");