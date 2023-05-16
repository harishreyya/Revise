var obj = {
    name: "harish"
}

var obj2 = Object.create(obj);



console.log(obj2)
console.log(obj2.name)

var son = {
  father:"mohan" ,
  myfather(){
    console.log(this.father)
  } 
}

var daughter = Object.create(son)

console.log(daughter.father); //daughter inherited son


daughter.myfather()


// -----------

// function person(n,a){
//     this.name = n,
//     this.age = a
// }

// let person2 = new person("antara",26);

// person.prototype.city = function (c){
//     this.city = c
// }

// person2.city = "mumbai"
// console.log(person2)

//to add city to person directly

// -------------
function person(n,a,){
    this.name = n,
    this.age = a
}

let person2 = new person("antara",26);

person.prototype.setCity = function (c){
    this.city = c
}

person2.setCity = "mumbai"
console.log(person2)

// -----------

let a = {
    name:"a"
}

let b = Object.create(a)

console.log(b.__proto__.__proto__.__proto__) // everything in js is an object

let arr = [1,2,3]

console.log(arr.__proto__.__proto__.__proto__)// everything is an object

let see =()=>{
    name = "str"
}

console.log(see.__proto__.__proto__.__proto__)// everything is an object

let we = 23

console.log(we.__proto__.__proto__.__proto__)// everything is an object

// js has an object as base prototype by which it creats other data types and methods that we can use on them.