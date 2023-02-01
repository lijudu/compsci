function fibRec(n) {
    if (n < 2) {
        return [0];   
    }
    if (n < 3) {
        return [0,1];
    }
    var array = fibRec(n - 1);
    array.push(array[n - 2] + array[n - 3]);
    return array;
};

console.log(fibRec(8))