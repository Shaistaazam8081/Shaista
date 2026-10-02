
console.log("JS FILE CONNECTED")

//browser storege --> 1. local storage 2. session storage. ---> storage space around---> 5MB per origin or per browser.
//only 1 diffrence --> how long data is going to stay , in both storage it's going to vary. 
//localStorage.methods hote h. dono ,e same methods h
// localStorage.setItem("num", 1);
// localStorage.setItem("num2", 1);
// localStorage.setItem("num3", 1)
// localStorage.setItem("num5", 1)
// localStorage.setItem("num4", 1)
// // key and value mus be string.

// let result = localStorage.getItem("nishant")//ye null dega , nishant jaisa kch exist hi nhi krta.
// console.log(result)

// let result2 = localStorage.key("0")//key method ---> index leta h , index like array. if exist, then return  key name otherwise written null.
// console.log(result2);

//localStorage.removeItem("num")// null dega, ye kch written nhi krata. // 

// localStorage.clear() it will clear the local storage completely.
//let's take an ex.
// document.querySelector("#clear-local-storage").addEventListener("click", () => {
//   localStorage.clear()
// })

// document.querySelector("#add-session-storage").addEventListener("click", () => {
//   sessionStorage.setItem("session", "item")
// })

//local storage me data tb tk rehta jb tk tum khud usko khud se nhi hataoge.lekin
//session sorage ---> tab lifespan hoti h. jaisee hi doosre tab me same cheez open krenge to session item khali ho jayega.
//object -----> local storage pr run nhi kra sakte.
//object ----> string ----> local storage.
//local storage ----> string.forEach() nhi kra sakte.
// local strage ---> JSON.parse --> object/array 
// [],{} --> JSON string me convert krna ho to ----> JSON.stringify() -->conver to JSON string.
//JSON.parse() ---> convert from json.string to valid object.

//New topic
// fronted backened connect kaise hote h , commmunication kasie krte h? -----? through API.ex --> waiter API h , between u and kitchen.
//API ----> is a way fpr our application communicate with another appplication or server.
// how we can conect API to javascript or .js? ----> through  XMLHTTP REQUEST also called XHR.
//Puraana tarika h ye. we rusing this ---> fetch
//fetch(apiEndPoint, options). fetch always return promise, to ise consume krna pdega.

// let  xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function () {
//     let data = xhttp.responseText;
//     console.log(data);
// }
// xhttp.open("GET", "https://api.github.com/users/octocat" , true);
// xhttp.send();

fetch("https://api.github.com/users/octocat")
  .then(data => data.json())
  .then(data => console.log(data));

async function getUser(username = "shaistaazam8081") {
  const response = await fetch(`https://api.github.com/users/${username}`)
  const data = await response.json()
  return data;
   //console.log(data)
}
 //getUser()

/// we always write fetch. fetch ka kaam hota h --> ek api end point se data laakr dena. fetch promise written krta h isliye await use kiya h.
// fetch 2 state process hota h --> pehla responce dega. then tumko response me se main data ko nikaalna hoga.main data ko nikalne ka process bi async processh.
//main data ko kaise nikalte h ---> .JSON ke through nikalte h.

//PROJECT
document.querySelector("#github-form").addEventListener("submit", async (e) => {
  e.preventDefault()
  let username = document.querySelector("#github-username").value

  const data = await getUser(username)

  document.querySelector("#show-profile").innerHTML = `
     <img src="${data.avatar_url}" alt="profile">
     <h2>${data.name}</h2>
    <i>username : ${data.login}</i>
     <p>Bio : ${data.bio}</p>
     <P>Followers : ${data.followers}</P>
     <p>Following : ${data.following}</p>
     <p>Public Repo : ${data.public_repos}</p>
  `
})


//BOM ---> Browser object model
//navigator method ----> ye dikhata h tm offline ho ya online ho bht saare data store krta h .
//location method hota h.
