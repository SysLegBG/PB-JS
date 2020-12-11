function solve(town, sales){
    sales = Number(sales);
    let commission = 0;
    let check = "";

    if(town === "Sofia"){
        switch(true){
            case (sales >= 0 && sales <= 500):
                commission = 0.050;
                break;
            case (sales > 500 && sales <= 1000):
                commission = 0.070;
                break;
            case (sales > 1000 && sales <= 10000):
                commission = 0.080;
                break;
            case (sales > 10000):
                commission = 0.120;
                break;
            default:
                check = "error";
                break; 
        }
    }else if(town === "Varna"){
        switch(true){
            case (sales >= 0 && sales <= 500):
                commission = 0.045;
                break;
            case (sales > 500 && sales <= 1000):
                commission = 0.075;
                break;
            case (sales > 1000 && sales <= 10000):
                commission = 0.100;
                break;
            case (sales > 10000):
                commission = 0.130;
                break;
            default:
                check = "error";
                break; 
        }
    }else if(town === "Plovdiv"){
        switch(true){
            case (sales >= 0 && sales <= 500):
                commission = 0.055;
                break;
            case (sales > 500 && sales <= 1000):
                commission = 0.080;
                break;
            case (sales > 1000 && sales <= 10000):
                commission = 0.120;
                break;
            case (sales > 10000):
                commission = 0.145;
                break;
            default:
                check = "error";
                break; 
        }
    }else{
        check = "error";
    }

    let finalCommission = sales * commission;

    if(check != "error"){
        console.log(finalCommission.toFixed(2));
    }else{
        console.log(check);        
    }
    
    
}

solve("Sofia", "-50");