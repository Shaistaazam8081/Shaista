
 let product1 = ["iphone", 79, 30, 99900]


let product2 = {
  name: "iphone",
  price: 99900,
  totalReviews: 79,
  discount: 30,
  productName: "iphone 22 pro max",
  printProductName: function () {
    console.log(this.productName);
  },
  printProductName: function () {
    console.log("iphone 22 pro max");
  },
  printDiscount() {
    console.log("30%");
  }
  // 'first-name' : "nishant"
}
//product2.first-name //error
// product2["first-name"] //work

// price (key) key ---> string 99900 ( value) value---> number , string, boolean, array etc in dono ko milakr kehte h properties
console.log(product2)
product2.printProductName()
product2.printDiscount()
//object ke anr ki keys ko object ke anr hi access krna h to (this.) lgana hoga.
// console.log(Object.keys(product2))
// console.log(Object.values(product2))
// console.log(Object.entries(product2))


//for of loop ---> array pr lagta h
// for in loop --> object
//for each loop ---> array

// for of loop
// for(value of product1) {
//     console.log(value)
// }
// for each method ----> ye CALLBACK FUNCTION leta h. (jb kisi function ko as a arguement pass krte ho to use call back fuction kehte h)
//   product1.forEach(function(value , index){
//               console.log(value,index);
//   })

//for in 
for (value in product1) {
  console.log(value)
}

for (value in product2) {
  console.log(product2[value])
}

// method having 2 syntax 
//     printProductName : function(){
//       console.log("iphone 18 pro max");
//    }

// destructuring


 //const [a, b, c] = ["iphone", 79, 30, 99900]  // destructuring --> tod diya  // react me use krenge aage
 //console.log(a)

let  { price , printDiscount , totalReviews } = product2
 // console.log(price , printDiscount , totalReviews)

//  for (value of Object.entries(product2)) {
//    console.log(value)
//  }

for ( [key ,value ]of Object.entries(product2)) {
        console.log( key ,value)
 }

  // let arr = [34, 56 ,67, 78, 90, 12, 45 , 67, 80]
//  console.log(arr )
//  console.log(...arr)

//  let a = [6,8]
//  let b = [4,9]

//  let c = [...a , ...b]  // array merging by spread operater
//  console.log(c);

//  let arr = [34, 56 ,67, 78, 90, 12, 45 , 67, 80]
//  const [n,p, ...hii] = [34, 56 ,67, 78, 90, 12, 45 , 67, 80] // n me 34 chla gya , p me 56 and rest of the cheezen print ho jayengi terminal men .  -----> rest operaror
//  console.log(hii)

//  
function add( num1 , num2 ){
    return num1 + num2
 }

 console.log(add(4,5))

 function add( num1 , ...numbers ){
      console.log(numbers)
 }
console.log(add(4,5 , 78, 90, 567))
 
// function add(...numbers) {
//   let total = 0
//   for (value of numbers) {
//     total += value
//   }
//   return total;
// }
// console.log(add(4,5 , 78, 90, 567));