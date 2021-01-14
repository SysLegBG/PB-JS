function solve(input){
    let index = 0;
    let studentTickets = 0;
    let standardTickets = 0;
    let kidTickets = 0;

    while(input[index] != "Finish"){
        let movie = input[index++];
        let seats = input[index++];
        let soldTickets = 0;

        while(input[index] != "End"){
            switch(input[index]){
                case "student":
                    studentTickets++;
                    soldTickets++;
                    break;
                case "standard":
                    standardTickets++;
                    soldTickets++
                    break;
                case "kid":
                    kidTickets++;
                    soldTickets++;
                    break;
            }
            if(soldTickets == seats){
                break;
            }
            index++;
        }
        let takenSeats = soldTickets / seats * 100;
        console.log(`${movie} - ${takenSeats.toFixed(2)}% full.`);
        index++;        
    }

    let totalTickets = studentTickets + standardTickets + kidTickets;
    let soldStudentTickets = studentTickets / totalTickets * 100;
    let soldStandardTickets = standardTickets / totalTickets * 100;
    let soldKidTickets = kidTickets / totalTickets * 100;

    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${soldStudentTickets.toFixed(2)}% student tickets.`);
    console.log(`${soldStandardTickets.toFixed(2)}% standard tickets.`);
    console.log(`${soldKidTickets.toFixed(2)}% kids tickets.`);
}

solve([
    'Taxi',     '10',
    'standard', 'kid',
    'student',  'student',
    'standard', 'standard',
    'End',      'Scary Movie',
    '6',        'student',
    'student',  'student',
    'student',  'student',
    'student',  'Finish'
  ]
  );