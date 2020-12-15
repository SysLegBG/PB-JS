function solve(input){
    let n = Number(input.shift());
    let p = [0, 0, 0, 0, 0];

    for(i=0; i < n; i++){
        let num = Number(input.shift());
            switch(true){
                case (num < 200):
                    p[0]++;
                    break;
                case (num < 400):
                    p[1]++;
                    break;
                case (num < 600):
                    p[2]++;
                    break;
                case (num < 800):
                    p[3]++;
                    break;
                default:
                    p[4]++;
                    break;
            }        
    }

    for(i = 0; i < 5; i++){
        let percent = (p[i] / n) * 100;
        console.log(`${percent.toFixed(2)}%`);        
    }
}

solve(["3", "1", "2", "999"])