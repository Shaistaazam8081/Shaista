
// console.log(a);// undefined kun? hoisting ki wjh se
// var a = 5;


// console.log(b) // error , kyn? temporal dead zone me h . creation se lekr initialization tk jo time hota h tdz kehte h. jiski wjh se error deta h
// let b = 7;  // initialization ke baad hi access kr paayega.



// fun1();
// function fun1(){
//        console.log("hii")  // run ? --> creation ke wqt memory me  aa gya h 
// }

// fun2()
//  var fun2 = function(){
//        console.log("hii shreya");
// }    // type error (?) ---> fun2 undefined h , var laga hua h , memory creation ke wqt to fun2 undefined hoga . aur tum fun2() call kra rhe ho . fun2 is not a function.

// fun3()
//  const fun3 = function(){
//        console.log("hello");
// }       // refrence error (?)  temporal dead zone ki wjh se .ye const h isme aur ye to abhi initialize hi nhi hua h .
 
// fun 2 , fun 3 same lg rhe h, same bilkl nhi h kun ? var and const zameen aasmaan ka farq.


///EXECUTION CONTEXT ---> environment h jhn "js" execute hota h
  // 2 phase hote h 1 . creation phase  2. execution phase.
  //1. creation phase  ---> memory creation --> declaratin se related h and allocation --> le bhai ye tera , ye tera . key aur avallue ke form me hoti h key hoti h jisse represent kiya jaa rha h aur value jo key ko di gyi ho  for ex a = 4 respectively.
  // 2. Execution phase ---> line by line hota h . assinging value  then calling function and evaluating expressions.
  // execution context . 1. globally execution context and 




  // var a= 5;
  // let b = 8;
  // console.log(a + b)

  // function outer(){
  //   num1 = 10;
  //   num2 = 30;
  //   function inner(){
  //       let num1 = 30
  //       let num2 = 60
  //        return num1 + num2 ;
  //   }
  //  const result = inner() + num1 + num2
  //   return result;
    
  // }

  //  const result = outer() 
  //  console.log(result);

   
  
  