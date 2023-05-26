fetch('https://fakestoreapi.com/products')
.then((res)=>res.json())
.then(function(res){
    console.log(res)
    showPrdoucts(res)
})
 let bigDiv = document.getElementById("container")
function showPrdoucts(products){
products.forEach(function(product){
    let div = document.createElement('div');
    let img = document.createElement('img');
    img.src= product.image
   let title =  document.createElement('p');
   title.innerText = product.title
   let price =  document.createElement('p');
   price.innerText = product.price

   div.append(img,title,price)
   bigDiv.append(div)
});

}