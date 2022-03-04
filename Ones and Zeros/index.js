
// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.





const binaryArrayToNumber = arr => {
    // your code

    let arrayToString=arr.join('')
    
    const number=parseInt(arrayToString,2)
    console.log(number);
    return number
  
  };

  binaryArrayToNumber([0, 1, 0, 1])
  // ==>5