const API_URL = 'https://api.themoviedb.org/3';

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTJjYTAwZDYxZWIzOTEyYjZlNzc4MDA4YWQ3ZmNjOCIsInN1YiI6IjYyODJmNmYwMTQ5NTY1MDA2NmI1NjlhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4MJSPDJhhpbHHJyNYBtH_uCZh4o0e3xGhZpcBIDy-Y8'
    }
}

const fetchMovies = () => {
    fetch(`${API_URL}/movie/popularasdsa`, options)
        // Primero debo convertir la respuesta en JSON
        .then(response => response.json())
        //Puedo recorrer la peliculas y generar los bloques
        .then(response => {
            console.log(response);
            let movies = response.results;
            let divPopular = document.querySelector('#popular-list');
            for (let i = 0; i < movies.length; i++) {
                let html = `
                    <div class="movie-item" id="movie1">
                        <a href="detail-movie.html">
                            <img src="https://image.tmdb.org/t/p/w500/${movies[i].poster_path}" alt="" class="movie-item-img">
                            <div class="movie-item-detail">
                                <p class="movie-item-detail-title">${movies[i].title}</p>
                                <p class="movie-item-detail-subtitle">${movies[i].release_date} - ${movies[i].vote_average}</p>
                            </div>
                        </a>
                    </div>
                `;
                divPopular.insertAdjacentHTML('beforeend',html);
            }
            console.log('Finalizado la generación de peliculas')

        })
        // .then(function(response){
        //     console.log(response)
        // })
        .catch(err => console.log(err));
}
let pages = 1

const getNext = () => {
    pages=pages+1;
    fetch(`${API_URL}/movie/popular?page=${pages}`, options)
    // Primero debo convertir la respuesta en JSON
    .then(response => response.json())
    //Puedo recorrer la peliculas y generar los bloques
    .then(response => {
        console.log(response);
        let movies = response.results;
        let divPopular = document.querySelector('#popular-list');
        for (let i = 0; i < movies.length; i++) {
            let html = `
                <div class="movie-item" id="movie1">
                    <a href="detail-movie.html">
                        <img src="https://image.tmdb.org/t/p/w500/${movies[i].poster_path}" alt="" class="movie-item-img">
                        <div class="movie-item-detail">
                            <p class="movie-item-detail-title">${movies[i].title}</p>
                            <p class="movie-item-detail-subtitle">${movies[i].release_date} - ${movies[i].vote_average}</p>
                        </div>
                    </a>
                </div>
            `;
            divPopular.insertAdjacentHTML('beforeend',html);
        }
        console.log('Finalizado la generación de peliculas')

    })
    // .then(function(response){
    //     console.log(response)
    // })
    .catch(err => console.log(err));
}

// const fetchTopRatedMovies = () => {
//     fetch(`${API_URL}/movie/top_rated`)
// }
console.log('Iniciando la llamada a la API');
fetchMovies();
console.log('Estoy continuando con la ejecución de mi página')