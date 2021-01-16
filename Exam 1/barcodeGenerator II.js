function solve(input) {
    let outputStr = "";
    let from = String(input[0]);
    let to = input[1];

    for (let n = 0; n < 4; n++) {
        for (let i = Number(from.charAt(n)); i <= Number(to.charAt(n)); i++) {
            if (i % 2 !== 0) {

            }

        }
    }

    console.log(outputStr);
}

solve(["2345", "6789"])