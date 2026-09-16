

// function outer(){
//     let a = 5
//     function inner(){
//         console.log(a)
//         let a =7;
//     }
//     inner()
// }
// outer()
// error ? --> outer ka creation hoga phir execution hoga value a ki 5 aayegi , 
//then inner ko call lgegi  creation hoga khali  , execution ki baari hogi to a to khali hoga console kaose hoga  refrence error aayega

function outer(){
    const a = 5;
    function inner(){
        console.log(a);
        
    }
     return  inner;
}
 const response = outer(); // resopnse is a variable h , 
console.log(outer)
// console.log(response())
 response()

 //CLOSURE ---> apne parent / outer ke data ko store krta h remember rkta h. 
 // a function that remebers its lexical envionmen.

                  
          