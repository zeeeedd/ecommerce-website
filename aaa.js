const product = [

{
    id: 0,
    image: './products/btata1.jpg',
    title: 'Electric Whisk',
    price: 20,
},

{
    id: 1,
    image: './products/btata2.jpg',
    title: 'Car sunshade',
    price: 30,

},

{
    id: 2,
    image: './products/btata3.jpg',
    title:  'Coffe cup' ,
    price: 50,


},
{
 id: 3,
 image: './products/btata4.jpg',
 title: 'sfhfhsf',
 price: 80,
},

];
// const categories = [...new Set(product.map((item)=>

// {return item}))]
// let i=0;

// document.getElementById('root').innerHTML = categories.map((item) =>
// {

//  var {image, title, price} = item;
//  return(
//    ` <div class='box'>
// <div class='img-box'>
// <img class='images' src=${image}></img>
// </div>
// <div class = 'bottom'>
// <p>${title}</p>
// <h2>$ ${price}.00</h2>`+
// "<button onclick = 'addtocart("+(i++)+")'>Add to cart </button>"+
// ` </div>
// </div>`
//  )



// }).join('')

// var cart = [];

// function addtocart(a) {
//     cart.push({...categories[a]});
//     displaycart();
// }

// function displaycart(a) {
//     let j = 0;
//     if (cart.length==0) {
//         document.getElementById('cartItem').innerHTML = "Your cart is empty";
//     } 
//     else {
//         document.getElementById("cartItem").innerHTML = cart.map((items)=> 
//             {
//             var { image, title, price } = items;
//             return (
//                 `<div class='cart-item'>
//                     <div class='row-img'>
//                         <img class='rowimg' src="${image}">
//                     </div>
//                     <p style='font-size:12px;'>${title}</p>
//                     <h2 style='font-size: 15px;'>$ ${price}.00</h2>
//                     <i class='fa solid fa-trash' onclick='delElement(${j++})'></i>
//                 </div>`
//             );
//         }).join('');
//     }
// }



// const categories = [...new Set(products.map((item) =>{return item}))]

// let i = 0;

// document.getElementById('root').innerHTML = categories.map((item) => {
//     var { image, title, price } = item;
//     return (
//         `<div class='box'>
//             <div class='img-box'>
//                 <img class='images' src="${image}" alt="${title}">
//             </div>
//             <div class='bottom'>
//                 <p>${title}</p>
//                 <h2>$ ${price}.00</h2>
//                 <button onclick='addtocart(${i++})'>Add to cart</button>
//             </div>
//          </div>`
//     );
// }).join('');

// var cart = [];

// function addtocart(a) {
//     cart.push({ ...categories[a] });
//     displaycart();
// }

// function displaycart() {
//     let j = 0; total=0;
//     document.getElementById("count").innerHTML=cart.length;
//     if (cart.length == 0) {
//         document.getElementById('cartItem').innerHTML = "Your cart is empty";
//     } else {
//         document.getElementById("cartItem").innerHTML = cart.map((items) => {
//             var { image, title, price } = items;
//             total=total+price;
//             document.getElementById("total").innerHTML = "$ "+total+".00";
//             return (

//                 `<div class='cart-item'>
//                     <div class='row-img'>
//                         <img class='rowimg' src="${image}">
//                     </div>
//                     <p style='font-size:12px;'>${title}</p>
//                     <h2 style='font-size:15px;'>$ ${price}.00</h2>
//                     <i class='fa-solid fa-trash' onclick='delElement(${j++})'></i>
//                 </div>`
//             );
//         }).join('');
//     }
// }

// function delElement(index) {
//     cart.splice(index, 1);
//     displaycart();
// }






    
const categories = [...new Set(product.map((item) => item))];

let i = 0;

document.getElementById('root').innerHTML = categories.map((item) => {
    var { image, title, price } = item;
    return (
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src="${image}" alt="${title}">
            </div>
            <div class='bottom'>
                <p>${title}</p>
                <h2>$ ${price}.00</h2>
                <button onclick='addtocart(${i++})'>Add to cart</button>
            </div>
         </div>`
    );
}).join('');

var cart = [];

function addtocart(a) {
    cart.push({ ...categories[a] });
    displaycart();
}

function displaycart() {
    let j = 0; total=0;
    document.getElementById("count").innerHTML=cart.length;
    if (cart.length == 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
    } else {
        document.getElementById("cartItem").innerHTML = cart.map((items) => {
            var { image, title, price } = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return (
                `<div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src="${image}">
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size:15px;'>$ ${price}.00</h2>
                    <i class='fa-solid fa-trash' onclick='delElement(${j++})'></i>
                </div>`
            );
        }).join('');
    }
}

function delElement(index) {
    cart.splice(index, 1);
    displaycart();
}

