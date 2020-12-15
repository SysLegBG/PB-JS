function solve(input){
    let tabsNum = Number(input.shift());
    let salary = Number(input.shift());

    for(i = 1; i <= tabsNum; i++){        
        let tab = input.shift();

        switch(tab){
            case "Facebook":
                salary -= 150;
                break;
            case "Instagram":
                salary -= 100;
                break;
            case "Reddit":
                salary -= 50;
        }

        if(salary <= 0){
            console.log("You have lost your salary.");
            break;
        }
    }
    if(salary > 0){
        console.log(salary);
    }   
}

solve([
    '10',        '750',
    'Facebook',  'Dev.bg',
    'Instagram', 'Facebook',
    'Reddit',    'Facebook',
    'Facebook'
  ]);
  solve([ '3', '500', 'Facebook', 'Stackoverflow.com', 'softuni.bg', '' ]);
  solve([ '3', '500', 'Github.com', 'Stackoverflow.com', 'softuni.bg', '' ])