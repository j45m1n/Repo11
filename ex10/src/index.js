function mySplice(arr1, arr2, n) {  
     var myResult = [];

    myResult.push(...arr2.slice(0, n));
    myResult.push(...arr1.splice(2));
    myResult.push(...arr1.splice(1));
    myResult.push(...arr1.splice(0));
    myResult.push(...arr2.splice(n, arr2.length));
       
    return myResult;
}
console.log(mySplice([1, 2, 3], [4, 5], 1));
module.exports = mySplice;