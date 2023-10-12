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
                    <img v-bind:src="movie.poster" alt="" class="movie-item-img">
                    <div class="movie-item-detail">
                        <p class="movie-item-detail-title">{{ movie.title }}</p>
                        <p class="movie-item-detail-subtitle" v-if="movie.subtitle != '' ">{{ movie.subtitle }}</p>
                        <p class="movie-item-detail-subtitle" v-else>SIN ESPECIFICAR</p>
                    </div>
                </a>
            </div>
        </div>
    `,
    data(){
        return {
            movies: [
                {
                  title:'Mario Bros',
                  subtitle:'2023 - 6.9',
                  poster:'./static/img/mario.jpg'
                },
                {
                  title:'The Flash',
                  subtitle:'',
                  poster:'https://image.tmdb.org/t/p/w500/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg'
                },
                {
                  title:'The Little Mermaid',
                  subtitle:'2023 - 6.9',
                  poster:'https://image.tmdb.org/t/p/w500/ym1dxyOk4jFcSl4Q2zmRrA5BEEN.jpg'
                },
                {
                  title:'Ruby Gillman, Teenage Kraken',
                  subtitle:'',
                  poster:'https://image.tmdb.org/t/p/w500/kgrLpJcLBbyhWIkK7fx1fM4iSvf.jpg'
                },
                {
                  title:'La venganza de pepa pig',
                  subtitle:'2023 - 5.9',
                  poster:'https://image.tmdb.org/t/p/w500/kgrLpJcLBbyhWIkK7fx1fM4iSvf.jpg'
                },
              ]
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