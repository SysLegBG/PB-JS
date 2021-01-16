function solve(input) {
    let totalPoints = 0;
    let redBalls = 0;
    let orangeBalls = 0;
    let yellowBalls = 0;
    let whiteBalls = 0;
    let blackBalls = 0;
    let otherBalls = 0;

    for (let i = 1; i <= Number(input[0]); i++) {
        switch (input[i]) {
            case "red":
                totalPoints += 5;
                redBalls++;
                break;
            case "orange":
                totalPoints += 10;
                orangeBalls++;
                break;
            case "yellow":
                totalPoints += 15;
                yellowBalls++;
                break;
            case "white":
                totalPoints += 20;
                whiteBalls++;
                break;
            case "black":
                totalPoints /= 2;
                blackBalls++;
                break;
            default:
                otherBalls++;
        }
    }

    console.log(`Total points: ${Math.floor(totalPoints)}`);
    console.log(`Points from red balls: ${redBalls}`);
    console.log(`Points from orange balls: ${orangeBalls}`);
    console.log(`Points from yellow balls: ${yellowBalls}`);
    console.log(`Points from white balls: ${whiteBalls}`);
    console.log(`Other colors picked: ${otherBalls}`);
    console.log(`Divides from black balls: ${blackBalls}`);
}

solve([
    '10', 'white',
    'white', 'ee',
    'red', 'orange',
    'red', 'black',
    'black', 'black',
    'black'
])