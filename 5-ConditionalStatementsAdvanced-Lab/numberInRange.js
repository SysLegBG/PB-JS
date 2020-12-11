function solve(num){
    num = Number(num);
    let answer = "";

    if(num >= -100 && num <= 100 && num != 0){
        answer = "Yes";
    }else{
        answer = "No";
    }

    console.log(answer);
    
}

solve("-25");
solve("0");
solve("25");