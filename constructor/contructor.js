function player(n,t){
    this.name = n,
    this.place = t
}

var myPlayer = new player('adam','gilcrisht');

console.log(myPlayer)


// call

var person = {
    name:'harish'
}

var person2 = {
    name:'antara'
}

function name(m,c){
    console.log(this.name)
    this.age = m
    this.city = c
    // console.log(m)
}

name.call(person)// this keyword will be pointing to person
name.call(person2)//this keyword will be pointing to person2 
// name.call(person,21)

// console.log(person)

// apply (only commas changes to array else evrything same in call and apply)
// name.apply(person,[21,'pune'])
// console.log(person)

// bind (same as call,apply but we need to set it and excute whenever we require it)

var mybind = name.bind(person,23,"london"); //array syntax wont work syntax is like call

mybind()
console.log(person)

// call,apply,bind provides a new value to 'this' to the function/method