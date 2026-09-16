
// let originalPrices = [399 , 799 , 599]
// let discountedPrices = []

// for(value of originalPrices){
//     let discount = value * 10/100
//     discountedPrices.push(value - discount) // 10 %
//     // discountedPrices.push(value * 0.9) // 10 % discount
// }
// console.log(originalPrices)
// console.log(discountedPrices)

// // sahi tareeka 
//WHY USE MAP ? ---->  agr kisi array pe input lena h n length ka array same length ka array return krna h aur hr element pr kuch operation perform krna h .
// const discountedPrices2 = originalPrices.map((value) => {
//     return value * 0.9
// })
//  console.log(discountedPrices2)

//array of object (students)
let students = [
    {
        name: "ayaan",
        marks: 79,
    },
    {
        name: "shreya",
        marks: 70,
    },
    {
        name: "nainsi",
        marks: 45,
    },
    {
        name: "saluddin",
        marks: 30,
    },
    {
        name: "aluddin",
        marks: 28,
    },
]

//   let studentsNames = []
//  students.forEach((value) => {
//     studentsNames.push(value.name)
//  })



//  console.log(studentsNames)

//  const studentNames = students.map((student) => student.name)
//  const studentMarks = students.map((student) => student.marks)

//  console.log(studentNames, studentMarks)

let boostedMarks = students.map((student) => {
    return { ...student, marks: student.marks + 10 }
})  //  used spread operator

//  console.log(boostedMarks)

// let failedStudents = []

//     students.forEach((student) => {
//        if(student.marks < 33){
//           failedStudents.push(student)
//        }
//     })
//  console.log(failedStudents)

///FILTER
// const failedStudents = students.filter((student) => student.marks < 33 )
//const failedStudentsName = failedStudents.map((student) => student.name)

///concept of chaining
// const failedStudents = students.filter((student) => student.marks < 33).map((student) => student.name)
// console.log(failedStudents);

//REDUCE  ----> 
//// ARRAY LETA H N LENGTH , RETURN KRTA H SINGLE VALUE IT CAN BE NUMBER , BOOLEAN , OBJECT, ARRAY ETC
// SINGLE VALUE RETURN KAREGA

let marks = [34, 67, 56, 78, 89]
// let totalMarks = 0 /// initially
// marks.forEach((mark) => totalMarks = totalMarks + mark)

// const totalMarks = marks.reduce((accumulator , currentValue) => {
//     accumulator = accumulator + currentValue
//     return accumulator;
// } , 0)
  
// accumulator is just a variable.
// const totalMarks = marks.reduce((totalMarks , mark) =>  totalMarks + mark , 0 )
const totalMarks = students.reduce((totalMarks , student) =>  totalMarks + student.marks , 0 )
// console.log(totalMarks);

const attendence = ["present","present" , "present" , "absent" , "absent", "absent"]
//  let obj ={}
 
//  attendence.forEach((value) => {
//     if (obj[value]) {
//         obj[value] = obj[value] + 1
//     } else {
//         obj[value] = 1
//     }
//  })
//  console.log(obj)

//BY REDUCE 
const obj = attendence.reduce((acc , value) => {
    acc[value] = (acc[value] || 0) + 1 ;
    return acc
} , {})
console.log(obj)
