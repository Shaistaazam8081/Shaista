//object banate h , function nhi h ye to yhn closure nhi lgega ,iska lexical enivonment direct bahr h.
// now the concept of this cgoing to come here.
// let student  = {
//     name : "shaista",
//     printName : function(){
//         // console.log(this)
//         //  console.log(student.name)
//         console.log(this.name)
//     }

// }
// student.printName()

// let result = student.printName;
// result()

// let student2 = {
//         name : "pritam",
//         printName : student.printName
// }

// student2.printName()

// //THIS -->  it's special keyword. iska maml h --> ise faq nhi padta tum ise khn written krte ho ise farq pdta h ise khn execute krte ho.

// // imp keyword = called global object ---> this , window , global , globalthis.
// //browser ---> window === this ===globalThis
// //node --->  global === globalThis.
// // top of the file jo h wo global objec me hoti h

// let product = {
//     name : "iphone",
//     printName : () => {
//         console.log(this.name);
//     }
// }
// product.printName() /// arrow function ka khud ka this. nhi hota.yhn product ko this ban jana chahiye lekin ye aisa work nhi krta. ye lexical hota h.

// let product = {
//     name : "iphone",
//     printName : function (){
//         const print = ()  => {
//         console.log(this.name);
//     }
//     print()
//     }
// }
// product.printName()


var name = " somethimg"  // nod me nhi chlega lekin yhi browser me console kraoge  to chalega.
// let product = {
//     name : "iphone",
//     printName : () => {
//         console.log(this.name);
//     }
// }
// product.printName()


// function fun4(){ 
//     let name = "something"
//     let product = {
//     name : "iphone",
//     printName : () => {
//         console.log(this.name);
//     }
// }
// product.printName()
// }

// fun4() // ye fun khud ko hi call kr rha h na , aisa kch nhi h ki xyz.fun4(). iske paas khud ka this nhi h.

// function fun4(){ 
//     let name = "something"
//     let product = {
//         name : "iphone",
//         printName : function () {
//            const print = () => {
//               console.log(this.name);
//            }
//              print()
//        }

//     }
//     product.printName()
// }
// fun4() // ab hmne ise this provide kr diya h, product.


// let nestedFunction = {
//     name : "somethimg",
//  fun : function fun(){ 
//     let name = "something"
//     let product = {
//         name : "iphone",
//         printName : function () {
//            const print = () => {
//               console.log(this.name);
//            }
//              print()
//        }

//     }
//      product.printName()
//  }
// }
//   nestedFunction.fun() // nested functipn ke paas uska apna ths h, pehle calling yhin se hoga , uske baad jb uper  jaayega to ye printname ke paaas bhi thus h to iphone prnt ho jaayega.


//   let nestedFunction = {
//     name : "somethimg",
//  fun : function fun(){ 
//     let product = {
//         printName : function () {
//            const print = () => {
//               console.log(this.name);
//            }
//              print()
//        }

//     }
//      product.printName()
//    }
//  }
//  nestedFunction.fun() /// undefined --?  product ke andr to , product name h hi nhi to undefined aayega. aur iske paas pehle se this h ,to ye this dhoondne nhi jaayega.

let nestedFunction = {
    name: "somethimg",
    fun: function () {
        let product = {
            name: "iphone",
            printName: () => {
                console.log(this.name);
            }
        }
          product.printName()
    }
}
nestedFunction.fun() // something ----> ? ---> normal function nhi h , ye h arrow function to iphone se to mtlb hi nhi, to ye this dhoondenga ab bahar jaayega aur ise nested function me something milega to use written kra dega.

