function solve(input){
    let floors = Number(input[0]);
    let rooms = Number(input[1]);

    for(let i = floors; i > 0; i--){
        let fl = "";
        for(let r = 0; r < rooms; r++){
            (i == floors) ? fl += `L${i}${r} `: (i % 2 == 0) ? fl += `O${i}${r} ` : fl += `A${i}${r} `;
        }
        console.log(fl);        
    }
}

solve([6,4])