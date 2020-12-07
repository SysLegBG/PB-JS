function solve(sqMeters) {
    sqMeters - Number(sqMeters);

    let price = sqMeters * 7.61;
    let fPrice = price * 0.82;
    let discount = price * 0.18;

    console.log(`The final price is: ${fPrice.toFixed(2)} lv.`);
    console.log(`The discount is: ${discount.toFixed(2)} lv.`);      
}

solve("550");