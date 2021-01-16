function solve(input) {
    let current = input.shift();
    let bestPlayer = "";
    let goals = 0;

    while (current !== "END") {
        let player = current;
        let playerGoals = Number(input.shift());
        if (playerGoals > goals) {
            bestPlayer = player;
            goals = playerGoals;
        }
        if (playerGoals >= 10) {
            break;
        }
        current = input.shift();
    }
    console.log(`${bestPlayer} is the best player!`);
    (goals >= 3) ? console.log(`He has scored ${goals} goals and made a hat-trick !!!`)
        : console.log(`He has scored ${goals} goals.`);
}

solve(['Silva', '5', 'Harry Kane', '10', ''])