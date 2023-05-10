function products(p,q,t,n){
    this.price = p;
    this.quantity = q;
    this.type = t;
    this.name = n;
}

let p1 = new products(1000,2,'t-shirt','nike');
let p2 = new products(1200,3,'pant','puma')
let p3 = new products(2000,1,'shirt','addidas')


console.log(p1,p2,p3);


let str = new String('harish');
// when any new key word added in front then its object
console.log(str)
console.log(str.toString())
console.log(str.charAt(0))

let str1 = 'harish'

console.log(str1.charAt(0))
