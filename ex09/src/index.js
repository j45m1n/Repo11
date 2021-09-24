function myBouncer(arr) {
    var result = [];

    for(var i = 0; i < arr.length; i += 1) {
      if (arr[i]) {
          result.push(arr[i]);
      }
    }
    return result;
}

console.log(myBouncer([7, "ate", "", false, 9]));
module.exports = myBouncer;