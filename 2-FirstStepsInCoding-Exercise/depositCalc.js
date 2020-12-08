function solve(deposit, term, interest) {
    deposit = Number(deposit);
    term = Number(term);
    interest = Number(interest);
    interest /= 100;

    let sum = deposit + term * ((deposit * interest) / 12);

    console.log(sum.toFixed(2));
    
}

solve("5000", "12", "7");