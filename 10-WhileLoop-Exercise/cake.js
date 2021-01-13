function solve(input){
    let w = Number(input.shift());
    let h = Number(input.shift());
    let cake = w * h;
    let pieces = 0;

    while(true){
        let temp = input.shift();
        
        if(temp == "STOP"){
            console.log(`${cake - pieces} pieces are left.`);
            break;
        }

        pieces += Number(temp);

        if(cake < pieces){
            console.log(`No more cake left! You need ${pieces - cake} pieces more.`);
            break;
        }
    }
}

solve([ '10', '2', '2', '4', '6', 'STOP' ])