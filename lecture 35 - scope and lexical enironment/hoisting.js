
//HOISTING
// VARIABLE AND FUNCTION'S DECLARATIONS TOP PR CHLE JATE H and u can use before declarisation
// LET OR VAR OR CONST INCLUDING FUNCTION ALL ARE HOISTED


// console.log(a)
// const a = 5
//  var a = 5
//      let a = 4
//      console.log(a)

//    addNum()
//      function addNum(){
//         console.log("hello");
//      }

//     //  addNum()

//      addTwoNum()
//     var addTwoNum = function(){
//          console.log("function expression");
//     }

//     // addTwoNum()

// 

// var a = 6;

// function addNum(){
//     let a = 6;
//     console.log(a);
// }
// addNum ();

// let city = "delhi"

// function printCity(){
//     console.log(city)
// }

// function random(fn){
//     let city = "varansi"
//     fn()
// }
// random(printCity)
//output --> printcity call krega ,  ye jayega variable fn() me ,kynki fn() khali h na, fn ke paas aaya printcity ,ab ise printcity milega nhi apne block function me to ye uper jaayega printcity to milega uper lekin us function me bhi city lo call krna h aur city h nhi us block function me to ye uper jaayega aur ise uper city = delhi mil jayega to ye indirectly delhi print kr dega.
//? ---> city me "varansi" kyn nhi print krayega .
//  reason ---> lexical scoping or lexical environment.
// lexical means --> sequence. it about heirarchy . pehle ghr me me phir koi aur kisi block me fir globally bs ye hi h lexical scoping.
// lexical environment --> inner function h na --> iske paas 2 type ki information hoti h pehli to iske khud ke andr jo variable wagaira h , doosri iske parent(outer) ke environment ki . same thing parent(outer) ke sath bhi outer ke paas inner ki info aur uske andr variable ki info aur phir global  info.
//aise chaining hoti h , environment create hota h aisa kr ke bahar jaa sakte ho.
// that's how code run.


function random(fn) {
    let city = "varansi"
    function printCity() {
        console.log(city);
    }
    return printCity

}
let printCity = random();
// console.log(printCity());
   printCity();