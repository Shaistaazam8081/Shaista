
//callback function ---> jo arguement paas krta h.
//2 types ke ---> sync chronus ans Async

// function fun1(callback){
//     console.log("hii")
//     callback()
// }

// function cb() {
//     console.log("this is call back function")
// }
// fun1(cb)

// let arr = ["a" , "b" , "c" , "d" ,"e"] // ex of sync
// arr.forEach()
// arr.map()


// high order function ---> any funcn that take a funcn as an arguement OR any funcn that returns a function.

// function a(){
//     function b(){

//     }

//     return b
// } 
//dono condition h to thk h lekin koi bhi ek high order function mil jayegi na to bhi thk h.

function searchPizza(cb1) {
    console.log("pizza searching...")
    setTimeout(function () {
        console.log("here is pizza's menu")
        // cb1() // ye add to cart ka call back h
        let price = 500;
        cb1(price)
    }, 2000) //2000 is 2sec
}

function addToCart(cb2) {
    console.log("pizza adding to cart....")
    setTimeout(function () {
        console.log("pizza added to cart")
        cb2()
    }, 3000)
}

function payment(price, cb3) {
    console.log(`payment inititaed , Amount : ${price}`)
    setTimeout(function () {
        console.log(`payment has been done, Amount : ${price}`)
        cb3()
    }, 5000)
}

///callback hell ----> function ke andr function , callbak ke andr callback.
searchPizza(function a(price) {
    addToCart(function b() {
        payment(price, function () {
            console.log("pizza delievered")
        })
    })
})

///problem in callback hell
// kisi aur ka access kisi aur de dena.means  inversion of control ---> we give controll of something to someone.



































// let name = "nishant"

// function hello (naam){
//     console.log(naam)
// }
// hello(name)

// ⭐ Important concept
// name aur naam same variable nahi hain.

// name = argument dene wala variable
// naam = parameter, jo value receive karta hai

// name
//  ↓
// "nishant"
//  ↓
// hello(name)
//  ↓
// naam = "nishant"
//  ↓
// console.log(naam)
//  ↓
// nishant

//Aur parameter ka naam kuch bhi ho sakta hai:















