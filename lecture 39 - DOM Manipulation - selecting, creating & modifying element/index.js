
// let h1 = document.getElementById("h1")
// let h1 = document.querySelector("h1")
// let h1 = document.querySelector(".h1")
// let h1 = document.querySelector("#h1")

// let h1 = document.querySelectorAll("h1")
// console.log(h1)

// let p = document.querySelector("#desc");

// //  p.textContent = "<h2> hello dostoo</h2>"
// // p.textContent = "hello bacho kaise ho"
// // p.innerHTML = "<h2> hello dostoo</h2>" // very very risky


// // console.log(p.textContent);
// // console.log(p.innerHTML);
// //  console.log(p.innerText); // ye ignore kr dega hidden text.

// // 1. setAttributes , 2. getattributes,

// //  p.setAttribute("style", "background-color: pink; font-size : 50px")

// let btn = document.querySelector("#btn")
// btn.setAttribute("disabled", "true")
// // btn.removeAttribute("disabled")

// let res = btn.getAttribute("disabled")
// console.log(res);

// p.classList.add("random")
// //   p.classList.remove(random)
// //  p.classList.toggle("random")

// p.style.backgroundColor ="red" //camel case
// p.dataset.hello = "hii"
// console.log(p.dataset.hello);

// let product = [
//     {
//         name: "lava 12",
//         price: 45890
//     },
//     {
//         name: "realme 12",
//         price: 48900
//     },
//     {
//         name: "poco 12",
//         price: 45890
//     },
//     {
//         name: "redmi 12",
//         price: 4890
//     },
//     {
//         name: "iphone 12",
//         price: 45890,
//     }
// ]
// ye saare data backened se  aaa rhe h to ab ise fronted pr kaise dikhayege.
//creating , appending and removing method.


// let div = document.createElement("div")
// let div2 = document.createElement("div")
// div.textContent = "hiello"
// div2.textContent = "hiraaa"
// console.log(div)

// //create elemnt ---> use dto create element(p,div,a etc)
// //2 types 1. appendChild() 2. append()


 let body = document.querySelector("body")
// console.log(body)
//   body.appendChild(div) // one node, once a time. // append means ---> insert in last, of body
//    body.appendChild(div2)

//  body.append(div ,div2) // u can pass multiple nodes
// body.prepend(div , div2) // inser in start of body

let products = [
    {
        name: "lava 12",
        price: 45890,
        imgUrl : "https://m.media-amazon.com/images/I/4120tymFBBL._SY300_SX300_QL70_FMwebp_.jpg"
    },
    {
        name: "realme 12",
        price: 48900,
        imgUrl : "https://m.media-amazon.com/images/I/41rbqr+ri-L._SY300_SX300_QL70_FMwebp_.jpg"
    },
    {
        name: "poco 12",
        price: 45890,
        imgUrl : "https://m.media-amazon.com/images/I/41vBypHYsLL._SY300_SX300_QL70_FMwebp_.jpg"
    },
    {
        name: "redmi 12",
        price: 4890,
        imgUrl : "https://m.media-amazon.com/images/I/81dblfYZOYL._SX425_.jpg"
    },
    {
        name: "iphone 17 pro",
        price: 45890,
        imgUrl : "https://m.media-amazon.com/images/I/61Ce-6B6x+L._SX466_.jpg"
    }
]

// let productList = document.querySelector("#product-list")

// products.forEach((product) => {
//     const card = document.createElement("div");
//     card.textContent =`${product.name} - ${product.price}`
//     productList.append(card)

// })    


 let productList = document.querySelector("#product-list")

products.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("singleProduct");
  


  card.innerHTML =`<div>
            <img src=${product.imgUrl} alt="">
        </div>
       <div class = "productDetail">
        <p>${product.name} </p>
        <p> ${product.price}</p>
    </div>`

      productList.append(card)

   })    

  let h2 = document.querySelector("h2")
   body.removeChild(h2) // u have to access parent.
   h2.remove()  // directly element pr apply hota h

  const items = productList.children
  productList.insertBefore(h2, items[3]) //for precise positioning

  //doosra tariqa
  // items[2].beforer(h2)//for precise positioning
  //items[2].after(h2) //for precise positioning
 
 

 



