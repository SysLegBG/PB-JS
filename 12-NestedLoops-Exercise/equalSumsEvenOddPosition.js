function solve(input){
    let outputStr = "";

    for(let num = Number(input[0]); num <= Number(input[1]); num++){
        let numCheck = String(num);
        let odd = 0;
        let even = 0;
        for(let i = 0; i < numCheck.length; i++){
            (i % 2 == 0) ? even += Number(numCheck.charAt(i)) : odd += Number(numCheck.charAt(i));
        }
        if(odd == even){
            outputStr += `${numCheck} `;
        }
    }

    console.log(outputStr);    
}

solve(["100000", "100050"])