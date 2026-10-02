//js promise.
//Promise ---> it's an object , that represent future result of asynchronus task or operation.
//promise --> 3 state 1. initial 2.completed/resolved 3.rejected
// initial state se promise always settled hoga.
/// settles means ---> either fulfilled or reject.
// creating a promise is synchronus but the work inside can be Asynchronus.
// how to consume/use promises? -->  we have 3 methods. 1 .then() 2  .cathch()  3   .finally() . all three methods are 'Async'.and they uses "Microtask queue".
//.then(onfulfilled,onRejected) --> jb promise resolve hoga , jb promise reject hoga respectively.
// ek baar setttled hone pr promse ka state change ni hota.


// const p = new Promise(function (resolve, reject) {
//     // return 1; is se kch return nhi hota.
//     // reject("server down h beti")
//     // resolve("hii")
//     //reject("server down h beti")
// })
// console.log(typeof p)it's always an object.
// console.log(p)
    //Once promise becomes fulfilled/rejected it does'nt go back to pending state.(agr tumhara promise ek baar fulfilled ya reject ho gya tpo wo wapis nhi jaayega pending state men).

    // p.then(function onFulfilled(val){
    //     console.log(val)
    // }, function onRejected(val){
    //      console.log(val)
    // }) // dono me se jisko pehle apna code mil gya wo run ho jayega. koi bhi reject aur fulfilled dono me se koi ek bhi mil gya to pending me nhi jaayega, code run ho jyega. yaaa to fulfill hoga ya to reject hoga.

    // .catch //it is always for reject.----> .then ka cb2 hota h means reject wala part hota h wo.catch hi hota h.//used for error handling.
// .then , we use only for fulfillment of promise.although h to dono funcn .then me lekin hm reject waaaaaale funcn ke liye .catch laga dete h , just becoz code clean rhe khichdi na pake.

//dekho ex.

// const res = p.then(function onFulfilled(val) {
//     console.log(val)
// })
//     .then(() => { })
//     .then()//chahe error yhn aaye
//     .then()//chahe error yhn aaye
//     .then()//chahe error yhn aaye
//     .catch(function (val) {
//         console.log(val)
//     }) // sbko ye hi catch krega.
//.finally ---> always run either promise  fulfilled or reject


// console.log("a")
// const p2 = new Promise(  function f1(res , rej) {
// console.log("b")
// res("helllo")
// })

// p2.then(function f2(val){
//     console.log("then")
//     console.log(val)
// }).catch(function f3(){
//     console.log("catch")
// }).finally(function f4(){
//     console.log("finally")
// })

// console.log("c");




function searchPizza() {
    return new Promise(function (resolve, reject) {
        console.log("Pizza searching...");
        setTimeout(function fun1() {
            console.log("Here is the Pizza's Menu.");
            let price = 500;
            // a(price)
            resolve(price)
        }, 2000)
    })

}

function addToCart(price) {
    return new Promise(function (resolve, reject) {
        console.log("Pizza adding to cart...");
        setTimeout(function fun2() {
            console.log("Pizza Added to cart");
            resolve(price)
        }, 3000)
    })
}

function paymet(price) {
    return new Promise(function (resolve, reject) {
        console.log(`Payment Initiated , Amount : ${price}`);
        setTimeout(function fun3() {

            let isPaymentSuccessful = false

            if (isPaymentSuccessful) {
                console.log(`Payment Completed, Amount : ${price}`);
                resolve()
            } else {
                reject("Bhaiya payment failed")
            }


        }, 5000)
    })
}

// searchPizza().then(function(price){
//     console.log(price);
// })

let res = searchPizza()
let price =0
res.then(function (price) {
    return addToCart(price)
}).then(function (price) {
    return paymet(price)
}).then(function () {
    console.log("Bss Aa hee gaya Pizza");
}).catch(function (err) {
    console.log(err);
})








