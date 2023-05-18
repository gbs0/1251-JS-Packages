import { Application } from "@hotwired/stimulus"
import { definitionsFromContext } from "@hotwired/stimulus-webpack-helpers"

window.Stimulus = Application.start()
const context = require.context("./controllers", true, /\.js$/)
Stimulus.load(definitionsFromContext(context))

// 1. Pegar o filme digitado no input
// const results = document.querySelector("#results")
// const input = document.querySelector("#search-input")
// const form = document.querySelector("#search-form")
// const button = document.querySelector("#button")
// const reset = document.querySelector("#reset")

// reset.addEventListener('click', (event) => {
//   event.preventDefault()
//   input.value = ""
//   button.removeAttribute("disabled")
//   results.innerHTML = ""
// })

// form.addEventListener("submit", (event) => {
//   event.preventDefault()
//   results.innerHTML = ""
//   const title = input.value
//   button.setAttribute("disabled", true)
//   fetchMovies(title)
// })


// // 2. Requisitar a URL com o filme digitado.
// const fetchMovies = (title) => {
//   fetch(`https://www.omdbapi.com/?apiKey=adf1f2d7&s=${title}`)
//   .then(response => response.json()) // response.json() = data
//   .then(data => insertMovies(data.Search))
// }

// // 3. Achar a lista de resultados e Inserir o resultado dos filmes
// const insertMovies = (array) => {
//   array.forEach(movie => {
//     const movieTag = `<li class="list-group-item rounded"><img src="${movie.Poster}" width="100"></li>`
//     results.insertAdjacentHTML('beforeend', movieTag)
//   })
// }

// fetchMovies("Harry Potter")
// initSortable()

