import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["input", "button", "results"]

  connect() {
    this.fetchMovies("Harry Potter")
  }

  reset(event) {
    event.preventDefault()
    this.inputTarget.value = "" // document.getElementById("search-input").value = ""
    this.buttonTarget.removeAttribute("disabled")
    this.resultsTarget.innerHTML = ""
  }

  search(event) {
    event.preventDefault()
    this.resultsTarget.innerHTML = ""
    const title = this.inputTarget.value
    this.buttonTarget.setAttribute("disabled", true)
    this.fetchMovies(title)
  }

  fetchMovies = (title) => {
    fetch(`https://www.omdbapi.com/?apiKey=adf1f2d7&s=${title}`)
    .then(response => response.json()) // response.json() = data
    .then(data => this.insertMovies(data.Search))
  }

  insertMovies = (array) => {
    array.forEach(movie => {
      const movieTag = `<li class="list-group-item border-0"><img src="${movie.Poster}" width="100"></li>`
      this.resultsTarget.insertAdjacentHTML('beforeend', movieTag)
    })
  }

}