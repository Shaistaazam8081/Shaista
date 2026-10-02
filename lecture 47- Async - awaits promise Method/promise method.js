//promise Method
// saare methods array of promise lete h.
//.all() , .allSettled() , .race(), .anyc()
//---->
//.all() ---> all promises are fulfiled the output same sequence me hoga in array. if koi promise reject hua to output reject hoga.
//.all() method.

function fun1() {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            resolve("fun1")
        }, 3000)
    })
}

function fun2() {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            resolve("fun2")
        }, 1000)
    })
}

function fun3() {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            reject("fun3")
        }, 7000)
    })
}

 //let result = Promise.all([fun1(), fun2(), fun3()])
//let result = Promise.allSettled([fun1(), fun2(), fun3()])
//let result = Promise.race([fun1(), fun2(), fun3()]) // jo phle settled ho gya wo output h.
let result = Promise.any([fun1(), fun2(), fun3()]) // jo pehle fulfill ho gya wo output h.

result.then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})

/// .all--> webApi me ye sb parallely jayenge , aur ek sath run honge.jb result aayega to wo sequence me aayega.1, 2, 3
//tota time 7 sec hi lgega. kynki y esb parallely hi run honge na
//.all --> tumko tbhi sb kch dega jb sb kch fulfill hoga . agr ek bhi reject h to wo rejected de dega. saare fulfilled ko chhod dega
//.allSetlled() --> fulfill ho ya reject ho tumko de dega output.

