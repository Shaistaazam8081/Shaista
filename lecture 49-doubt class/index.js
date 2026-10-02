
//doubt class

// JSON ----> javascript object notation
//agr backened ka data chahiye to API se baat cheet krni hogi.
//session storgare --> not fixed it's per tab
// storage me value jo rkhni hoti h wo string me rkhni hoti h --> isliye json.stringify use krte h to obj se string me convert ho jati h . aur store ho jati h
//ab hme use krna h to wapis string se change krna hoga to original shape me laane ke liye ----> JSON.parse() ka us ekrte h.

//promsie is something ------> pending state se eventually settled ho jaayegi. resolve or reject ho jaayegi.
//future me khin fetch ka use krogi to async ka use.

//map --> high order funcn h .
// array pr lagta , agr input me n length ka array leta h to output me bhi n length ka hi  array return krega.
//[1, 2, 3, 5, 6,7], hme iske hr item pr 5 plus krana h to hm map ke through kra lenge.
//for ex. 
let arr = [1, 2, 3, 4, 5,6]
let output = arr.map((item) => {
    //   return item
   // return item + 4
  if (item >= 5){
    return item +5
  }  // agr koi item 5 se bdi h ya 5 ke brarabr h tbhi 5 plus krao wrna mt krao.
  return item
})
console.log(output)
//filter modify nhi krta.
//coercion ---- convert krna.






