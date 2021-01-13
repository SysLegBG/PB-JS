function solve(input){
    let user = input.shift();
    let pass = input.shift();

    let login = input.shift();

    while(true){
        if(login == pass){
            console.log(`Welcome ${user}!`);
            break;
        }
        login = input.shift();
    }
}