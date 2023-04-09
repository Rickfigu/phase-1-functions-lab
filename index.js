// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
    return Math.abs(blocks - 42);
}

function distanceFromHqInFeet(feet){
    return distanceFromHqInBlocks(feet) * 264;
}

function distanceTravelledInFeet (num1, num2){
    return Math.abs((num1-num2) * 264);
}

function calculatesFarePrice (start, destination){
    let distance = distanceTravelledInFeet (start, destination)
    if(distance > 2500){
        return "cannot travel that far";
    }

    else if(distance > 2000){
        return 25;
    }
    
    else if(distance > 400){
        return (distance - 400) * 0.02;
    }

    else{
        return 0;
    }
    
}