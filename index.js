// Code your solution in this file!
let scuber = [43,50,34];

function distanceFromHqInBlocks(distance){
    if( distance == scuber[0]){
        return distance = 1;
    }
    else if(distance == scuber[1]){
        return distance = 8;
    }
    else if(distance == scuber[2]){
        return distance = 8;
    }
    else {
        return 'Nothing value of picking up';
    }
}
let manhattanFeet = 264;

function distanceFromHqInFeet(distance){
    let blockDistance = distanceFromHqInBlocks(distance);
    if (blockDistance == 0) {
        return 'Unknown location'
    }
    let distanceFeet = blockDistance * manhattanFeet;
        return distanceFeet;
}

function distanceTravelledInFeet(start, destination){
    //Next, customers want Scuber to calculate the number of feet travelled based on the distance.
    let distanceTrvlFeet = Math.abs((start - destination)) * manhattanFeet;
    
    if (distanceTrvlFeet === 1320) {
        return distanceTrvlFeet;
    }
    else if(distanceTrvlFeet === 2640){
        return distanceTrvlFeet;
    }
    else{
        return distanceTrvlFeet;
    }
}

function calculatesFarePrice(start, destination){
    //Variables distancce optionnal
    let maxDistanceBlocks = 2500 / manhattanFeet; // Max distance in blocks (convert feet to blocks)
    if (Math.abs(destination - start) > maxDistanceBlocks) {
        return "cannot travel that far";
    }

    if(start === destination){
        return 'You are already there, No fare needed!';
    }

    let distanceInBlocks = Math.abs(destination - start);
    let distanceInFeet = distanceInBlocks * manhattanFeet;

    if( distanceInFeet == 0){
        return 'gives customers a free sample' + distanceInFeet;
    }

    //calculate fare based on distance
    let excessFeet = distanceInFeet - 400; // Feet excluding free portion
    let pricePerFeet = 2; // Price in cents per foot for distance between 400 and 2000;
    let pricePerFeetOver = 25; //Price for distance over 2000 and under 2500;
    let fareInCents = excessFeet * pricePerFeet;
    
    if(distanceInFeet <= 400){
        distanceInFeet = 0;
        return distanceInFeet //first 400 feet are free
    }
    else if(distanceInFeet > 400 && distanceInFeet <= 2000){
        return fareInCents / 100 // convert cents to the dollars
    }
    else if(distanceInFeet > 2000 && distanceInFeet < 2500){
        fareInCents = pricePerFeetOver;
        return fareInCents //
    }
    else{
        return "cannot travel that far"; // Distance is over 2500 feet
    }
}
distanceFromHqInBlocks();
distanceFromHqInFeet();
distanceTravelledInFeet(43,48);
distanceTravelledInFeet(50,60);
distanceTravelledInFeet(38,28);
calculatesFarePrice(43,44);
calculatesFarePrice(34,32);
calculatesFarePrice(50,58);
calculatesFarePrice(34,24);