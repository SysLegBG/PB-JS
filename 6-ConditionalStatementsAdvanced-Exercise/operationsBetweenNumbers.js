function solve(numOne, numTwo, operator){
    numOne = Number(numOne);
    numTwo = Number(numTwo);

    let result = 0;
    let isEven;

    switch(true){
        case (operator == "+"):
            result = numOne + numTwo;
            isEven = (result % 2) == 0;
            if(isEven){
                isEven = "even";
            }else{
                isEven = "odd";
            }
            console.log(`${numOne} + ${numTwo} = ${result} - ${isEven}`);
            break;
        case (operator == "-"):
            result = numOne - numTwo;
            isEven = (result % 2) == 0;
            if(isEven){
                isEven = "even";
            }else{
                isEven = "odd";
            }
            console.log(`${numOne} - ${numTwo} = ${result} - ${isEven}`);
            break;
        case (operator == "*"):
            result = numOne * numTwo;
            isEven = (result % 2) == 0;
            if(isEven){
                isEven = "even";
            }else{
                isEven = "odd";
            }
            console.log(`${numOne} * ${numTwo} = ${result} - ${isEven}`);
            break;
        case (operator =="/" && numTwo != 0):
            result = numOne / numTwo;
            console.log(`${numOne} / ${numTwo} = ${result.toFixed(2)}`);
            break;
        case (operator == "%" && numTwo != 0):
            result = numOne % numTwo;
            console.log(`${numOne} % ${numTwo} = ${result}`);
            break;
        case (numTwo == 0):
            console.log(`Cannot divide ${numOne} by zero`);
            break;         
    }
}

solve("10", "12", "+");
solve("123", "12", "/");
solve("112", "0", "/");
solve("10", "1", "-");
solve("10", "3", "%");
solve("10", "0", "%");
solve("7", "3", "*");