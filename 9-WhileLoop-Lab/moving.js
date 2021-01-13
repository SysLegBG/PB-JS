function solve(input){
    let roomWidth = Number(input.shift());
    let roomLength = Number(input.shift());
    let roomHeight = Number(input.shift());

    let freeSpace = roomWidth * roomLength * roomHeight;

    let boxes = 0;
    let currentInput = input.shift();

    while(currentInput != "Done"){
        boxes += Number(currentInput);
        if(boxes > freeSpace){
            let neededSpace = boxes - freeSpace;
            console.log(`No more free space! You need ${neededSpace} Cubic meters more.`);
            break;
        }
        if(input.length == 0){
            break;
        }
        currentInput = input.shift();
    }

    if(boxes <= freeSpace){
        let space = freeSpace - boxes;
        console.log(`${space} Cubic meters left.`);
    }
}

solve([ '10', '1', '2', '4', '6', 'Done' ])