
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

// forEach:
// The forEach() method executes a provided function once for each array element.

// Syntax
items.forEach(function(el){
    console.log(el*4)
});
console.log("----------")
triple = function(num,index){
    console.log(index,"index")
console.log(num*3);

}

items.forEach(triple);


// ----------------------------------

// map:

// The map() method creates a new array with the results of calling a provided function on every element in the calling array.

// Syntax

double = function (el){
    return el*2
}

console.log(items.map(double));
console.log("----")
console.log(items);

let strings = ["2","3","4"];
console.log(strings)
console.log(strings.map(Number))