function sumTwoSmallestNumbers(numbers) {  
    let smallest = numbers[0];
    for(var i=0; i<=numbers.length; i++){
      if(numbers[i] < smallest){
        smallest = numbers[i]
      }
    }
    console.log(smallest);
    
    let secondSmallest = numbers[0];
    for(var j=1; j<=numbers.length; j++){
      if(numbers[j] != smallest){
        if(numbers[j] < secondSmallest){
          secondSmallest = numbers[j];
        }
      }
    }