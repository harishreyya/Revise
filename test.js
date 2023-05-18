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
    } //object under obj
}
console.log(object.address.city)