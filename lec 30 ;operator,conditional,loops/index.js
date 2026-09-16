
 //console.log("hello bacho");

//Arithmatic operator

//let num1 = 2;
//let num2 = 4;
//console.log(num1+num2)
//console.log(num1-num2)
//console.log(num1* num2)  //multiply
//console.log(num1/num2)   // quotient after division
//console.log(num1**num2)  //power
//console.log(num1%num2)   //reminder after division
//console.log(num2/num1) 

//case sensitive
//java script case sensitive hoti h
// upeercase alag h ,lowercase apna alag h
//let NAME ="saif"; 
//let name = " juhi";
//let NAME = "saleem";

//increment (++) and decrement (--)

///let num = 45

//num++; // num = num+1
//console.log(++num); // pre increment ab num= 46 ho gya , aage num  jb add hoga to 46 se add hoga and so onn.
//console.log(++num);// 47
//console.log(num);  //47

//console.log(--num);  //44
//console.log(--num);   //43
//console.log(num);    //43

//Assignment operator 

// let num = 2;
// num += 5 ; // num=num+5 = 7
// console.log(num);
// num -= 5 ; // num=num-5 7-5 = 2
// console.log(num);
// num *= 5 ; // num=num*5  2*5=10
// console.log(num);
// console.log(num);
// num /= 5 ; // 
// console.log(num);
// num %= 5 ; // 
// console.log(num);
// num **= 5 ;
// console.log(num);

// const num1 = 3;
// const num2 = 6;

// console.log(3 > 6);
// console.log(3 < 6);
// console.log(3 >= 6);
// console.log(3 <= 6);
// console.log(3 == 6);
// console.log(3 != 6);

//loose equality  //type check ni krta
//console.log("5" == 5); 

//strict equality  //hmesha type check krta h
//console.log("5" === 5); 

//logical operator
//&&  {and} --> dono true chahiye
// || {or} --> ek bhi true ho to ,chalega
//!! { not}---> opposite kr do


// console.log(true && true)
// console.log(true || false)

// const age = 17
// const ID = true;

// const can_enter_club = age >= 18 && ID === true;
// console.log(can_enter_club)


//console.log(!43) // != true value ko false bna deta h ,false ko true value bna deta h
 
//const isloggedIn = false
// const isloggedIn = true

// if (isloggedIn) {
//      console.log("u can like, comment");
// }  else {
//      console.log("plzz first login");
// }

//let temp = 40
// let temp = 20

// if(temp >= 25){
//       console.log("ac chala do")
// } else {
//      console.log("Ac mt chalao")
// }

// let day =  "324vbdi"

// if (day === "monday") {
//      console.log("1st day of week");
// } else if (day === "tue")  {
//      console.log("2nd day of week");
// } else if (day === "wed") {
//      console.log("3rd day of week");
// } else if (day === "thurs")  {
//      console.log("4th day of week");
// } else if (day === "fri") {
//      console.log("5th day of week");
// } else if (day === "sat") {
//      console.log("6th day of week");
// } else if (day === "sun")  {
//      console.log("7th day of week");
// } else {
//      console.log("wrong day");
// } 



//nested if else jio hotstar
  //const isloggedIn = false

//  const isloggedIn = true
//  const isSubscribed = true
//  if (isloggedIn) {
//        if (isSubscribed) {
//           console.log("u can access premium content")
//        }
//        else {
//           console.log("u don't have any premium plan to access the content")
//        }
//  }  else {
//      console.log("please login");
//  }


//Switch case


const day = "fri"

switch (day) {
     case "mon":
          console.log("1st day of the week")
          break;
       case "tue":
          console.log("2ndday of the week")
          break;
      case "fri":
          console.log("5th day of the week")
          break;
     default:
          console.log("wrong day")
}