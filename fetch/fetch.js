fetch('https://fakestoreapi.com/products')
.then((res)=>res.json())
.then((res)=> 

res.map((data)=>{
console.log(data.title)
})

)