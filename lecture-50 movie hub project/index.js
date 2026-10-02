

const movieForm = document.querySelector("#movieForm")
const movieInput = document.querySelector("#movieInput")
const movieHub = document.querySelector("#movieHub")
const hamBurger = document.querySelector("#hamburger")
const options = document.querySelector("#options")


movieForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let query = movieInput.value.trim()// query ky h (movie name) ---> just a variable , hm yhn movie bhi le skte h.

    if (!query) {
        return
    }// kis iye lagaye h ----> agr search bar me kch nhi h , fir bhi koi search kr rha h to wo console ho jata tha . lekin ab nhi hoga.
    console.log(query);
    searchMovies(query);
})

async function searchMovies(movieName) {

    // movieHub.innerHTML = `<p>Searching movie........</p>`
    movieHub.innerHTML = `<span class="loader"></span>`

    let response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=be0cabc9&s=${encodeURIComponent(movieName)}`)//& ke baad s lga h taaki continuously movie aa jaye 5 - 10. 
    let data = await response.json()
    console.log(data);

    if (data.Response === "True") {
        displayMovies(data.Search)
    } else {
        console.log(data.Error);
        movieHub.innerHTML = `<p>${data.Error}</p>`
    }
} // fetch akele use nhi kr sakte isliye ---> await lagayenge and await akele use nhi kr sakte isliye ---> async lagayenge. response aa jayega lekin response ko convert krwana pdega isliye JSON lagayenge.

function displayMovies(movies) {

    movieHub.innerHTML = ""

    movies.forEach((movie) => {
        const div = document.createElement("div")

        div.dataset.id = movie.imdbID //iska mtlb h --> movie ki id ko div ke andr id naamse save kr do.

        div.setAttribute("class", "movie-card")//event delegation

        div.innerHTML = `
        <div> 
            <img src="${movie.Poster} alt="">
        </div>
        <div>
            <h3>${movie.Title}</h3>
            <h4>${movie.Year}</h4>
        </div>
    `

        // div.addEventListener("click" , (e) => {
        //     console.log( movie.imdbID)
        // }) ye hm tareeka use nhi krenge iski jgh event delegation lagayenge.

        movieHub.append(div)
    })
}

movieHub.addEventListener("click", (e) => {
    e.stopPropagation()
    const movieCard = e.target.closest(".movie-card") //Ye bol raha hai:“Jis movie card par click hua hai, usko mujhe do.”Ab movie card mil gaya.Uske andar jo ID humne save ki thi, use nikalna hai:
    const imdbID = movieCard.dataset.id //uske liye , ye krna h  Bas! ❤️
    console.log(imdbID);
    location.href = `movie-details.html?id=${imdbID}` // isne ky kiya -> uper jo url h na , browser me, use change kr diya aur jaise hi tum movie pr click kiye wo tmko doosre page pr le gya , jo mention h like, movie detals wale page pr le ggya.
})

let data = [

    {
        "Title": "Avengers: Infinity War",
        "Year": "2018",
        "imdbID": "tt4154756",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_QL75_UX380_CR0,0,380,562_.jpg"
    },
    {
        "Title": "Captain America: Civil War",
        "Year": "2016",
        "imdbID": "tt3498820",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_QL75_UX380_CR0,0,380,562_.jpg"
    },
    {
        "Title": "World War Z",
        "Year": "2013",
        "imdbID": "tt0816711",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BODg3ZTM2YWQtZDE5Ny00NGNiLTkzYjgtYWVlYjNkOTg5NDI1XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "Title": "War of the Worlds",
        "Year": "2005",
        "imdbID": "tt0407304",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNDUyODAzNDI1Nl5BMl5BanBnXkFtZTcwMDA2NDAzMw@@._V1_SX300.jpg"
    },
    {
        "Title": "Lord of War",
        "Year": "2005",
        "imdbID": "tt0399295",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNThlY2NkYmMtNTFhNi00MzBiLWJmNzEtZjk5MzYwYWU2MjllXkEyXkFqcGc@._V1_QL75_UX380_CR0,2,380,562_.jpg"
    },
    {
        "Title": "War for the Planet of the Apes",
        "Year": "2017",
        "imdbID": "tt3450958",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMzNhMzNiZDYtMzYxYy00YTYwLTkxNmYtNTJhOGU1Yjg5ODI5XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "Title": "War Dogs",
        "Year": "2016",
        "imdbID": "tt2005151",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjEyNzQ0NzM4MV5BMl5BanBnXkFtZTgwMDI0ODM2OTE@._V1_SX300.jpg"
    },
    {
        "Title": "Civil War",
        "Year": "2024",
        "imdbID": "tt17279496",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYTkzMjc0YzgtY2E0Yi00NDBlLWI0MWUtODY1ZjExMDAyOWZiXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "Title": "The Tomorrow War",
        "Year": "2021",
        "imdbID": "tt9777666",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYmUyNzY2YWYtNWQ0My00ODMwLTkwOTQtOTA0ZjM0MjRmYjJiXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "Title": "This Means War",
        "Year": "2012",
        "imdbID": "tt1596350",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTYyOTQ4MDE2MV5BMl5BanBnXkFtZTcwOTE0MTgwNw@@._V1_SX300.jpg"
    }
]

displayMovies(data);

hamburger.addEventListener("click", (e) => {
e.stopPropagation();
options.classList.toggle("hidden")
})








