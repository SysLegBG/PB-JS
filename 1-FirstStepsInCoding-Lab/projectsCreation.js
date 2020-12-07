function solve(archName, projectCount) {
    projectCount = Number(projectCount);

    let neededHours = projectCount * 3;

    console.log(`The architect ${archName} will need ${neededHours} hours to complete ${projectCount} project/s.`);
    
}

solve("George", "4")