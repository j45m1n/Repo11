function myMutation(arr) {
    var firstWord = arr[0];
    var secondWord = arr[1];

    for (var i = 0; i < secondWord.length; i++) {
        if (firstWord.indexOf(secondWord[i]) === -1)
        return false;
    }
     return true;
}

console.log(myMutation(["Hello", "Hey"]));
module.exports = myMutation;