const API_URL = 'https://api.themoviedb.org/3';

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTJjYTAwZDYxZWIzOTEyYjZlNzc4MDA4YWQ3ZmNjOCIsInN1YiI6IjYyODJmNmYwMTQ5NTY1MDA2NmI1NjlhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4MJSPDJhhpbHHJyNYBtH_uCZh4o0e3xGhZpcBIDy-Y8'
    }
}

const bannerComponent = {
    template: `
        <section id="banner" class="d-flex">
            <div class="banner-card container">
                <h1>{{title}}</h1>                    
                <h2 v-text="subtitle"></h2>
                <h3>ALgo para agregar</h3>
                <a v-bind:href="btnHref" v-bind:class="btnClass" v-show="login">Registrate</a>
            </div>            
        </section>
    `,
    data(){
        return {
            title:'CAMBIO EL TITULO',
            subtitle:'Disfruta donde quieras. Cancela cuando quieras.',
            login:false,
            btnHref:'logout.html',
            btnClass:'btn-cac',
        }
    },
    methods: {

    }
}

const moviesComponent = {
    template :`
        <div id="popular-list" class="movies-grid">
            <div class="movie-item" v-for="movie in movies">
                <a href="detail-movie.html">
                    <img v-bind:src="'https://image.tmdb.org/t/p/w500/'+movie.poster_path" alt="" class="movie-item-img">
                    <div class="movie-item-detail">
                        <p class="movie-item-detail-title">{{ movie.title }}</p>
                        <p class="movie-item-detail-subtitle">{{ movie.release_date }} - {{ movie.vote_average }} </p>
                    </div>
                </a>
            </div>
            <div>
                <button class='btn-cac' v-on:click="fetchPrevMovies()">Anterior</button>
                <button class='btn-cac' v-on:click="fetchNextMovies()">Siguiente</button>
            </div>
        </div>
    `,
    data(){
        return {
            movies: [],
            page: 1,            
        }
    },
    created(){
        this.fetchMovies();
    },
    methods:{
        async fetchMovies(){
            try {
                const response = await fetch(`${API_URL}/movie/popular?page=1`, options);
                const data = await response.json();
                this.movies = data.results;
                console.log(data);
            } catch (error) {
                console.error('Error al obtener las peliculas',error);
            }
        },
        async fetchNextMovies(){
            try {
                this.page++;
                const response = await fetch(`${API_URL}/movie/popular?page=${this.page}`, options);
                const data = await response.json();
                this.movies = data.results;
                console.log(data);
            } catch (error) {
                console.error('Error al obtener las peliculas',error);
            }
        },
        async fetchPrevMovies(){
            try {
                if(this.page>1){
                    this.page--;
                    const response = await fetch(`${API_URL}/movie/popular?page=${this.page}`, options);
                    const data = await response.json();
                    this.movies = data.results;
                    console.log(data);
                }else{
                    alert('No puedo consultar')
                }
                
            } catch (error) {
                console.error('Error al obtener las peliculas',error);
            }
        }
    }
}

const { createApp } = Vue

createApp({
    components: {
        'banner': bannerComponent,
        'movies-grid': moviesComponent
    }
}).mount('#app')