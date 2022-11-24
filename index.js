function distanceFromHqInBlocks(blocks){
    if(blocks > 42){
        return blocks - 42;
    }
    else if(blocks < 42){
        return 42 - blocks;
    }
}
distanceFromHqInBlocks(43);

function distanceFromHqInFeet(blocks){
    if(blocks > 42){
        return (blocks - 42) * 264;
    }
    else if(blocks < 42){
       return (42 - blocks) * 264;
    }
}
distanceFromHqInFeet(distanceFromHqInBlocks(43));


function distanceTravelledInFeet(start, destination){
   if(start > destination){
    return (start - destination) * 264;
   }
   else if(destination > start){
    return (destination - start) * 264;
   }
}
distanceTravelledInFeet(34, 38);

function calculatesFarePrice(start, destination){
    if((start - destination)* 264 <= 400){
        return 0;
    }
    else if((start - destination)* 264 > 400 && (start - destination)* 264 <= 2000){
        return 2.56;
    } 
    else if((start - destination)* 264 > 2000 && (start - destination)* 264 <= 2500){
        return 25;
    }

    else if((start - destination)* 264 > 2500){
        return 'cannot travel that far';
    }

}
  console.log(calculatesFarePrice(40,32));





