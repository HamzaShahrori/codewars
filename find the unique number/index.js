function findUniq(arr) {
  // do magic
 
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] >= 0 || obj[arr[i]] >= Number.NEGATIVE_INFINITY) {
        if(obj[arr[i]]== Number.NEGATIVE_INFINITY){
            obj[arr[i]]=1
        }
        else if(obj[arr[i]]== Number.POSITIVE_INFINITY){
            obj[arr[i]]=1
        }
      obj[arr[i]] = obj[arr[i]] + 1;
    } else {
      obj[arr[i]] = arr[i];
    }
  }

  for (const key in obj) {
    if (obj[key] == key) {
      console.log(obj[key]);
      return obj[key];
    }
  }
}

findUniq([0, 0, 0.55, 0, 0]);
