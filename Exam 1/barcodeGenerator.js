function solve(input) {
    let start = String(input[0]);
    let end = String(input[1]);
    let outputStr = "";

    for (let i = Number(input[0]); i <= Number(input[1]); i++) {
        let currentNum = String(i);
        let odd = true;
        for (let j = 0; j < currentNum.length; j++) {
            let num = Number(currentNum.charAt(j));
            if (num % 2 === 0 || num < start.charAt(j) || num > end.charAt(j)) {
                odd = false;
                break;
            }
        }
        if (odd) { outputStr += `${currentNum} ` };
    }

    console.log(outputStr);
}

solve(["2345", "6789"])