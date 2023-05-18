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