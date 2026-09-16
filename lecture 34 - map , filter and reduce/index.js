

// object merging using spread operator
// let obj1 = {
//      name : "shaista",
//     phone : 456790216890
// }

// let obj2 = {
//     address : " india",
//     aadharCard : 3457793210,
//     name : "bhai"
// }

// let obj3 = { ...obj1 , ...obj2}
// console.log(obj3);

// array and object update
// const me aap poore value ko update nhi kr sate  kisi ek ko kr sakte ho, lekin let update kr sakte ho , use zyada const ko hi krte h

// let arr = [1, 3, 4, 6]
// arr = ["rishi" , "ridhi" , "swaleh" , "swaleha"]
//  console.log(arr)

// const arr = [1, 3, 4, 6]
// arr[1] = ["rishi" , "ridhi" , "swaleh" , "swaleha"]
//  console.log(arr)


// let obj = {
//     name :"mannu",
//   rollNo: 23
// }
 
// obj = {
//     add : "richa"
// }
// console.log(obj)

// const obj = {
//     name :"mannu",
//   rollNo: 23,
//   address : null
// }

 
// obj.name = "shanu"
// obj["name"] = "shan"
// delete obj.rollNo //property deleted
// console.log(obj)

// ? = optional chainig
 //console.log(obj.address?.street); // for any inforformation , u r not sured that it is coming from the backend or not

// shift ---> statr se delete and unshift ---> statr se add
// push ---> last se add and pop ---> last se del
 /// New method SPLICE ---> add , delete and replace .method of array
 // .splice (start, deletecount) statrt (statr index)---> jhn se del krna ho.  deletecount----> kitna delete krna h
 let arr1 = [1,2 , 3, 4 , 5, 6]
 //arr1.splice(1, 3) // for delete
 //arr1.splice( 1 , 0,3 ) //add  // index 1 pr add krna h , delete kuch nhi krna to 0 ,add ky krna h
 //arr1.splice( 4 ,  3 , 9)
//  console.log(arr1)

//  arr1.slice( ) //mutability means changable and  immutability non changable
//  let trimArr = arr1.slice(1,5)
//  console.log(trimArr)

// console.log(arr1.indexOf(3))
// console.log(arr1.indexOf(344)) // if value of index is not prsnt  in the data then it a lways give -1 , -1 mtlb wo h hi nhi 



// let res = arr1.find((value) => {
//       return value
// })
// console.log(res);

 // u can give specific value .
// let res = arr1.find((value) => {
//       return value === 5
// })
// console.log(res);


// let resIndex = arr1.findIndex((value) => {
//        return value === 3
//  })
//    console.log(resIndex);

 //FLAT
//  let arr3 = [1,2,3,4,5, [6, 7, 8, [9 ,10 ,11]]]
// console.log(...arr3);
//  console.log(arr3.flat(Infinity));

//mutability ----> splice ,pop , shift , unshift, push
let arr4 = [3,4,5,6,7,8]
let arrCopy = arr4
let arrCopy2 = [...arr4]; //spread operator is the solution

 arrCopy.pop() // mutability hoti h pop me
console.log("arr4",arr4);
console.log(arrCopy2);
  
// MAP ---> ek  array method h 
// array input leta h and return me bhi array krta h