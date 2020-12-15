function solve(str){
    let count = str.split(" ").length;
    if(count > 10){
        console.log(`The message is too long to be send! Has ${count} words.`);
    }else{
        console.log("The message was send successfully!");        
    }    
}

//solve("This message has exactly eleven words. One more as it's allowed!");
solve("This message has ten words and you can send it!");