function solve(age, gender){
    age = Number(age);

    if(gender == "m"){
        if(age < 16){
            console.log("Master");            
        }else{
            console.log("Mr.");            
        }
    }else{
        if(age < 16){
            console.log("Miss");            
        }else{
            console.log("Ms.");            
        }
    }
}

solve("12", "f");