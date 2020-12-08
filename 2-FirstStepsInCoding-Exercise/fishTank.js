function solve(length, width, height, percent) {
    length = Number(length);
    width = Number(width);
    height = Number(height);
    percent = Number(percent);

    let aquariumVolume = length * width * height;
    let totalWaterAmount = aquariumVolume * 0.001;
    percent *= 0.01;

    let neededWaterAmount = totalWaterAmount * (1 - percent);

    console.log(neededWaterAmount);
    
}

solve("85", "75", "47", "17")
solve("105", "77", "89", "18.5")