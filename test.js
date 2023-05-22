// var arrToConvert = [[0,0,1],[2,3,3],[4,4,5]]; 

// console.log(get1DArray(arrToConvert));

// const numbers = [[1,2], [2,3], [3,4]];
// const result = [].concat(...arrToConvert);

// console.log(result);

// let str = "good boy bad girl";
// let str1=""
// doog yob dab lirg
// doog yob dab lrig
// for(i=str.length-1;i>=0;i--){
//     str1+= str[i]
// }


// let arr = str.split(" ");
// res=[]
// arr.reverse()
// console.log(arr)
// for(i=arr.length-1;i>=0;i--){
// res.push(arr[i])
// }
// console.log(res.join(" "))


// var , let & const

// for(var i = 0; i< 6; i++){
//    setTimeout(() => {
//     console.log("var",i)
//    }, 2000)
// }

// console.log("------------------")
// for(let i = 0; i< 6; i++){
//     setTimeout(() => {
//         console.log("let",i)
//        }, 2)
// }
// console.log("------------------")
// for( i = 0; i< 6; i++){
//     console.log("no settimeout",i)
// }

// console.log(m)
// console.log(n)
// console.log(x)
//  const x = 4
// {
//     let n = 0
//     {
//         var m = 2
//     }
// }

let arr = [{
    name:"harish",
    age:20
},
{
    name:"antara",
    age:22
},{
    name:"intu",
    age:22
}]

// console.log(arr)
// let ans = JSON.stringify(arr)
// console.log(JSON.parse(ans))

// let car = cars.find(car => car.color === "red");
let find = arr.find(arr => arr.age === 22)

console.log(find)

let filter = arr.filter(arr => arr.age === 22)

console.log(filter)

let sides = [2,4,6,5]

let area = sides.map( side => side*side)
console.log(area)
let some = sides.forEach(circumfrence)

function circumfrence(side){
 4*side
}

console.log(some)

// --------------------

let obj = {
    name:"harish"
}

let something = Object.create(obj)

console.log(something)

// -------------

let a = null;

let b;
console.log(a)//null
console.log(b)//undefined
console.log(a+3) //3
console.log(b+3) //NaN
console.log(a+"harish") //nullharish
console.log(b+"harish") //undefinedharish
console.log(typeof(a)) //object
console.log(typeof(b)) //undefined

// --------------

let object={
    name:"harish",
    address:{
        city:"palasa",
        state:"andhra pradesh"
    } //object under object
}
console.log(object.address.city)

// --------------

// hoisting 

// JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.

// -----------------

//JavaScript is an interpreted language, not a compiled language. A program such as C++ or Java needs to be compiled before it is run. The source code is passed through a program called a compiler, which translates it into bytecode that the machine understands and can execute.

// An interpreted language is a language in which the implementations execute instructions directly without earlier compiling a program into machine language.
// Examples of common interpreted languages are PHP, Ruby, Python, and JavaScript.

// ------------

// A compiled language is a programming language that is converted into machine code so that the processor can execute it. The compiled languages are usually compiled, not interpreted.
// Examples of pure compiled languages are C, C++, Erlang, Haskell, Rust, and Go.

//  The compiled programs run faster than interpreted programs. The interpreted programs run slower than the compiled program.

// diference b/w interprted and complied
// Interpreted language follows one step to get from source code to execution. A compiled language is converted into machine code so that the processor can execute it. An interpreted language is a language in which the implementations execute instructions directly without earlier compiling a program into machine language.


var array = [1,2,3,4] // var ,const ,let  same result

delete array[2];

console.log(array)//[ 1, 2, <1 empty item>, 4 ] ..............var ,const ,let  same result

console.log(array.length)//4 ..........var ,const ,let  same result
// -------------------------------------
// -----
const longy = [1,2,3,4,5]

longy.length= 2;

console.log(longy)// [ 1, 2 ]
console.log(longy.length)// 2

longy.length= 1;
console.log(longy)// [ 1 ]
console.log(longy.length)// 1 

longy.length= 0;
console.log(longy)// []
console.log(longy.length)// 0 

// --------------------------
// -------