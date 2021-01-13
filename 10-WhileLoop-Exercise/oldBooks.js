function solve(input){
    let targetBook = input.shift();
    let bookCounter = 0;
    let currentSearch = input.shift();

    while(currentSearch != "No More Books" && currentSearch != targetBook){
        bookCounter++;
        currentSearch = input.shift();
    }

    if(currentSearch == "No More Books"){
        console.log("The book you search is not here!");
        console.log(`You checked ${bookCounter} books.`);        
    }else{
        console.log(`You checked ${bookCounter} books and found it.`);        
    }
}

solve([
    'Bourne',     'True Story',
    'Forever',    'More Space',
    'The Girl',   'Spaceship',
    'Strongest',  'Profit',
    'Tripple',    'Stella',
    'The Matrix', 'Bourne'
  ])