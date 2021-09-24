var myNestedArray = [];

function myNestedFunction(arr) {
    myNestedArray = arr;
    arr = [["Toblerone", 5], ["Milka", 3]];
      return arr;
}

console.log(myNestedFunction(myNestedArray));
module.exports = myNestedFunction;