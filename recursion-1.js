function fibs(number) {
    let arr = [0, 1];
  
    if (number <= 0) {
      return "Must be greater than 0";
    } else if (number <= 1) {
      return '0'
    } else if (number <= 2) {
      return '0,1'
    } else {
      for(let i = 2; i <= number - 1; i++) {
        arr.push(arr[i - 1] + arr[i - 2])
      }
    }
  
    return arr
  }

  console.log(fibs(8))