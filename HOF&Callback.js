
// Callback functions
// A callback function is a function that is passed as an argument to another function, to be “called back” at a later time.


function sum(x, y, callBack){
    var total = x + y
    callBack(total)
}

var print = function(toPrint){
    console.log(toPrint)
}

sum(4, 5, print)

// -------------------------------------------

// Higher Order Functions
// Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.

// Here are some commonly used inbuilt methods for arrays.

// array.forEach()
// array.map()
// array.filter()
// array.reduce()
// each of these takes an argument.

let items = [1,4,5,3,6,6,2];
items.forEach(function(el){
    console.log(el*4)
});