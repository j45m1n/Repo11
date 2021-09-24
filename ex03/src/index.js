var myPetsArray = ["Dog", "Cat"];

function myArrayFunction(myPets) {
    var myNewPets = [...myPets];
    myNewPets = ["Bird", "Fish"];
    var firstPet = myNewPets[0];
    var lastPet = myNewPets[1];
    myNewPets.unshift("Lion");
    myNewPets = ["Lion", myPetsArray[1], firstPet];

    return myNewPets;
}

console.log(myArrayFunction(myPetsArray));
module.exports = myArrayFunction;