function largestNumFromAir(arr) {
    var maxNumArray = [];

     for(var i = 0; i < arr.length; i++) {
        var largestNumber = 0;
     for(var j=0; j < arr.length; j++) { 
        if(largestNumber < arr[i][j]) {
            largestNumber = arr[i][j];
        }
      }
      maxNumArray.push(largestNumber);
    }
 return maxNumArray;
}

console.log(largestNumFromAir([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
module.exports = largestNumFromAir;