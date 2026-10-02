

// async function fun2() {
//  //   console.log("hii")
//  return 11;
// }

// function fun1(){
//   //  console.log("hii")
//   //return Promise.resolve(10);
//   return 10;
// }

// fun2().then((data) => {
//     console.log(data);
// })// to consume any promise object.
// console.log(fun1());


// console.log("a")

// async function fun3(){
//     console.log("b")
// } 

// console.log("c");
// fun3()

//Await --> is for, how u consume the promise object .or it eleminates the promise chain.

// console.log("a")

// async function fun3() {
//     return "hello"
// } //async isliye likha h , mujhe prromise chhaiye.
// // fun3().then(data => {
// //     console.log(data);
// // })

// async function fun4() {
//     return "hii mannu"
// }

// //jo return ho rha h wo hi data run krata h.

// async function fun5() {
//     // fun3().then(data => {
//     //     console.log(data);
//     // })
// //or
//     let data = await fun3()
//      let data2 = await fun4()
//     console.log(data , data2)
// }
// fun5()
//await can only written in async funcn.
// await ---> mtlb wait kro and await async code ko handle krta h like  .then
///await----> pausing , withaout blocking.

//error ko catch kaise krenge . try catch block ---> code ko try kro phir error ko catch kro.
// let data;

//  async function fun3() {
//     return  "hello"
// }

// function fun4() {
//     return Promise.reject("error aa gya.")
// }

// async function fun5() {
//     try {
//         data = await fun3()
//         let data2 = await fun4()
//         console.log(data, data2)
//     } catch (error) {
//         console.log(error)
//     } finally {
//         console.log("mai to hmesha run krunga.")
//     }
// }
// fun5()


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

function payment(price) {
    return new Promise(function (resolve, reject) {
        console.log(`payment Initiated , Amount : ${price}`);
        setTimeout(function fun3() {

            let isPaymentSuccessful = false

            if (isPaymentSuccessful) {
                console.log(`payment Completed, Amount : ${price}`);
                resolve()
            } else {
                reject("payment failed, kindly repay.")
            }

        }, 5000)
    })
}


// let res = searchPizza()
// let price =0
// res.then(function (price) {
//     return addToCart(price)
// }).then(function (price) {
//     return paymet(price)
// }).then(function () {
//     console.log("pizza delivered");
// }).catch(function (err) {
//     console.log(err);
// })

//Or

async function orderFood() {
    try {
        let price = await searchPizza()
        await addToCart()
        await payment(price)
        console.log("pizza delivered")
    }  catch (error) {
        console.log(error)
    }
}
orderFood()
//try catch block isliye use krte h, taaki error agr aa rha h uper se to wo catch ho jaaye. 
//for ex - agr payment failed ho gyi h to try catch block me catch error catch kr lega.aur return krayega payment failed.
//async promise return krta h. async hata denge to await nhi likh paayege.
//search pizza ek promise return kr rha h, promise ko consume krne ke liye .then use krna pdega. .then me bht khucdi pak rhi h , bht crowded h code 
//jiski wjh se hm await use krte h.
///.then ka alternate h , await











// console.log(fun2());
// we use Async keyword to declare or define the async funcn & Async funcn always return promise.

//Promise.resolve --> always returns fulfilled promise.
// promise.reject ---> always return rejected promise.









