function solve(dogs, animals) {
    let dogCount = Number(dogs);
    let animalCount = Number(animals);

    let dogFoodPrice = dogCount * 2.5;
    let animalFoodPrice = animalCount * 4;

    console.log(`${dogFoodPrice + animalFoodPrice} lv.`);
    
}

solve("5", "4")