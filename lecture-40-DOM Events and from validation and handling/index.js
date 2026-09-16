

// let div = document.querySelector("#reveal-gift")
// let h1 = document.querySelector("#gift");
// let btn = document.querySelector("#btn")
// // btn.addEventListener(eventType,Callback)

// // btn.addEventListener("click", function (){
// //      console.log("wishing u happy teacher's day sirr");
// // })

// function revealGift(event) {
//     console.log(event);
//     console.log(event.type);
//     console.log("target", event.target); // jhn pr click ho rha h
//     console.log("currentTarget", event.currentTarget); // jhn eventlistner lagaya h
//     h1.classList.toggle("hidden");
//     // h1.classList.remove("hidden");
//     // h1.classList.add("visible");
// }
// div.addEventListener('click', revealGift)


// // btn.addEventListener('click' , (e) => {
// //      console.log(e);
// //      console.log(e.clientX)  // posn bata h
// //      console.log(e.clientY)   // posn batata h
// // });

// // function fun1(e) {
// //     console.log(e)
// // }
// // btn.addEventListener('click', fun1, { once: true }) // once mtlb ----> ek hi baar chlega, phir lhud run nhi hoga.
// // btn.removeEventListener('click', fun1)  // remove me ----> chlega hi nhi already remove h




// let outer = document.querySelector("#out")
// let inner = document.querySelector("#in");
// let btn2 = document.querySelector("#btn2")

// outer.addEventListener('click' , (e) =>{
//     console.log("outer")
// })

// inner.addEventListener('click' , (e) =>{
//     console.log("inner")
// })

// btn2.addEventListener('click' , (e) =>{
//     console.log("btn2")
//      e.stopPropagation()
// })

// capturing and bubbling.
//capturing phase islike searching , uske baad target pr aayega
//bubbling --> target poora krke wapis jaa rha h . jis raaste se aaye ho wapis usi se jaaoge ,aur us raaste me jitne bhi event listener honge un sbko  listen karate hue jaaoge.
// this is not the correct way.
//correc way hota h , jb hm Stoppropagation laga dete h







let body = document.querySelector("body")
// console.log(body)
//   body.appendChild(div) // one node, once a time.
//    body.appendChild(div2)

//  body.append(div ,div2) // u can pass multiple nodes


let products = [
    {
        name: "lava 12",
        price: 45890,
        imgUrl: "https://m.media-amazon.com/images/I/4120tymFBBL._SY300_SX300_QL70_FMwebp_.jpg"
    },
    {
        name: "realme 12",
        price: 48900,
        imgUrl: "https://m.media-amazon.com/images/I/41rbqr+ri-L._SY300_SX300_QL70_FMwebp_.jpg"
    },
    {
        name: "poco 12",
        price: 45890,
        imgUrl: "https://m.media-amazon.com/images/I/41vBypHYsLL._SY300_SX300_QL70_FMwebp_.jpg"
    },
    {
        name: "redmi 12",
        price: 4890,
        imgUrl: "https://m.media-amazon.com/images/I/81dblfYZOYL._SX425_.jpg"
    },
    {
        name: "iphone 17 pro",
        price: 45890,
        imgUrl: "https://m.media-amazon.com/images/I/61Ce-6B6x+L._SX466_.jpg"
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


    const dltBtn = document.createElement("button");
    const addToCartBtn = document.createElement("button");
    dltBtn.textContent = "Remove Button"
    addToCartBtn.textContent = "Add to cart"
    //    dltBtn.addEventListener("click" , (e) => {
    //     e.stopPropagation();
    //       card.remove()
    //    })


    card.innerHTML = `<div>
            <img src=${product.imgUrl} alt="">
        </div>
       <div class = "productDetail">
        <p>${product.name} </p>
        <p> ${product.price}</p>
    </div> 
    `

    card.append(dltBtn)
    card.append(addToCartBtn)
    productList.append(card)

})

// agr hme bhut saare cards h jinhe remove karana h to  kitne pe event listener lagagyenge , isliye parent ko select krte h .
//event delegation.
productList.addEventListener("click", (e) => {
    e.stopPropagation()
    console.log(e.target.parentElement);
    console.log(e.target.tagName); // button aayega aur ye hi chahiye
    console.log(e.target.textContent);

    //   if(e.target.tagName === "BUTTON") {
    //     e.target.parentElement.remove()
    // }

    if (e.target.textContent === "remove product") {
        e.target.parentElement.remove()
    }

   // dltBtn.closest("singleProduct"); // easy way to find . // clossest (selector)
})







 

















