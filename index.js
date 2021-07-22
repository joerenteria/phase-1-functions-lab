function distanceFromHqInBlocks(pickupLocation){
    let distance = 0;
  
      if (pickupLocation > 42){
      distance = pickupLocation - 42;
      }
      if (pickupLocation < 42){
      distance = 42 - pickupLocation;
      }
      return distance;
  }


  function distanceFromHqInFeet(pickupLocation){
    let distance = 0;
  
      if (pickupLocation > 42){
      distance = (pickupLocation - 42) * 264;
      }
      if (pickupLocation < 42){
      distance = (42 - pickupLocation) * 264;
      }
      return distance;
  }

  function distanceTravelledInFeet(begin,end){    
    let length = (begin - end)* 264;
    return Math.abs(length);
}


function calculatesFarePrice(start,destination){    
    let length = (start - destination)* 264;
    Math.abs(length);

    
    if(length < 400){
        return 0;
      }

    else if(length < 2000){
      return (length - 400) * 2 / 100;
    }

    else if(length < 2500){
      return 25;
    }

    else if(length > 2500){
        return `cannot travel that far`;
      }

  }