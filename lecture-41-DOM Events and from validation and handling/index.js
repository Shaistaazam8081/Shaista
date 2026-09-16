

const form = document.querySelector("#form")
const btn = document.querySelector("#btn")
const username = document.querySelector("#username")  // username tag uper le li ab jhn zrurt pdegi username ki value le lungi na
const bio = document.querySelector("#bio")
const charCount = document.querySelector("#char-count")
const checkbox = document.querySelector("#checkbox")
const country = document.querySelector("#country")
const passwordHint = document.querySelector("#password-hint")
const password = document.querySelector("#password")
//const errorMessage = document.querySelector("#error-message")




// const LIMIT = 1000
// charCount.textContent = `${LIMIT} characters remaining`

function showError(input, errorMessage) {
  input.parentElement.querySelector(".error-message").textContent = errorMessage;
}

function clearError(input) {
  input.parentElement.querySelector(".error-message").textContent = ""
}

function validUsername(username) {
  if (username.value.trim().length === 0) {
    showError(username, "please enter ur name")
    return false
  }

  if (username.value.trim().length < 5) {
    showError(username, "username at least 5 character")
    return false
  }
  clearError(username)
  return true
}

function validPassword(password) {
  if (password.value.trim().length === 0) {
    showError(password, "please enter ur password")
    return false
  }

  if (password.value.trim().length < 8) {
    showError(password, "password at least 8 character")
    return false
  }
  clearError(password)
  return true

}

form.addEventListener("submit", (e) => {
  e.preventDefault(); // ab default hi refresh nhi hoga.
  //  const name = document.querySelector("#name").value  

  // const password = document.querySelector("#password")

  const isUsernameValid = validUsername(username);
  const isPasswordValid = validPassword(password);


  // const email = document.querySelector("#email").value
  // // const password = document.querySelector("#password").value
  // console.log({ username: username.value, email, password: password.value })

  if (isUsernameValid && isPasswordValid) {
    document.querySelector("h1").classList.remove("hidden")
  }else {
    document.querySelector("h1").classList.add("hidden")
  }
})

// sumbit event hm , btn.addeventlistener pr nhi laga sakte uske liye click h.

//keystrock = no. of key pressing.
/// jaise hi koi inout doge turant hi console kr dega . continuously print krte rhega . every keystrock pe value dega .
// username.addEventListener( "input" , (e) => {
//    console.log(username.value);
// })

//  bio.addEventListener( "input" , (e) => {
//      const remaining = 150 - bio.value.length;
//      charCount.textContent = `${remaining} characters remaining`

//   })


// bio.addEventListener("input", (e) => {
//   const remaining = LIMIT - bio.value.length;
//   charCount.textContent = `${remaining} characters remaining`

// })

// ////change event  ----> fired once
// checkbox.addEventListener("change", (e) => {
//   console.log(checkbox.checked)  // true , false me value console hogi.

// })

// country.addEventListener("change", (e) => {
//   console.log(country.value);
// })  // select me input change dono chlega to lekin use change event hi  krna h.

/// Event type ---> 1. focus 2. blur

//   username.addEventListener( "focus" , (e) => {
//    console.log("focus");
//  })

//   username.addEventListener( "blur" , (e) => {
//    console.log("blur");
//  })

// password.addEventListener("focus", (e) => {
//   passwordHint.classList.remove("hidden")
// })

// password.addEventListener("blur", (e) => {
//   passwordHint.classList.add("hidden")
// })  //// jaose hi focus se ht jaye na to , wapis hidden ho jayega .










































