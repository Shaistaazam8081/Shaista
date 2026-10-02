
// console.log("task 1");

// console.log("task 2");

// for(let i = 0 ; i < 10000000; i++){

// }   // unneccessary main thread ko block kr rha h.


// let startTime = Date.now()

// while (Date.now() - startTime < 10000) {

 //} // date.now = unix timestamp in milisec. ye time 1 jan 1970 se chl rha h and obiously time bhut tezi se bdh rha h rukega to nhi. . 10,000 means 10,000 milisec means 10 sec. 10 sec ke liye ruk gya h , 10 sec baad loop chlne lagega. jaise hi 10000 < 10000 value false ho jayegi aur loop chlne lgega.
// ye method bilkl unnecessary h, neeche ke codes rok rha h.  now , came to the solution.
//console.log("task 3");

// Soln is  setTimeout and setInterval.
// console.log("task 1");
//   //setTimeout(callbackfn , timer)
// setTimeout(function cb(){
//     console.log("task 3")
// },0) /// abhi time 0 msec h , ab ye jo task ye bilkl seprate h, neeche wale code is pr depend nhi kr rhe. run hone ke liye.
// console.log("task 2");

// console.log("task 1")

// setTimeout(function cb(){
//     console.log("task 2")
// },4000) // wait krega webApi me 4 sec tk 

//  let startTime = Date.now()

//  while (Date.now() - startTime < 3000) {

//  } //ab ye call stack me aa gya aur call stack  se 3 sec baad niklega. jb ye niklega to waiting wale ka lgbhg 4sec poora ho gya hoga aur ab wo waiting wala call stack me aa gya hoga.

//  setTimeout(function cb(){
//     console.log("task 4")
// },5000) // ab ye jayega call  stack  me ise bhej diya jaayega webAPI me wait krega 5 sec tk fir aayega call stack me.

// setTimeout(function cb(){
//     console.log("task 5")
// },2000) // ab call stack me fauran ye chla jaayega fir webapi me jb tk pehle wale ka 5sec cmplte hi nhi hua hoga , ye jaayega ito iska to 2 hi sec h fauran cmplwwete ho jaayega to pehle ye print hoga call stack me jaakr uske baad last me uper wala print hoga 5sec wala.

// console.log("task 3")

///EVENTLOOP ---> coninuously monitor krta h call stack ko agr wo khaali ho gya to wo priority deta h micro task que ko agr wo bhi khali h to jaate h call back que me.
// micra task wo hote h jinme settimeout nhi hota jo sync chromous hote h.

///set -interval ---> hr interval ke baad automatic dobaara run kra dega code aur ye infinity tk krega.

// setInterval(function() {
//      console.log("hii")
// } , 4000)
// ab iska soln taaki infinity ke liye na print ho.
//condition deni pdegi.

 //let count = 0
//  let count = 1
//   let id = setInterval(function() {

//   if (count >= 5) {
//     clearInterval(id)
//   }
//      console.log("hii")

//      count ++ ;
// } , 0)

const body = document.querySelector("body")

// body.style.backgroundColor = "brown"
// let color = "#63f3a3"

let colorStr = "0123456789abcdef"

setInterval(() => { 
     let color = ""
 let randomValue = Math.floor(Math.random () * colorStr.length) +1

 for (let i = 0; i < 6; i++){
    let randomValue = Math.floor(Math.random () * colorStr.length) 
    color = color + colorStr[randomValue]
 }
body.style.backgroundColor = `#${color}` 

} , 500) // 0.5 sec, automatically color will be changed.
  /// hexa-decimal ---> 0 - 9 and a - f















































































































































































































































