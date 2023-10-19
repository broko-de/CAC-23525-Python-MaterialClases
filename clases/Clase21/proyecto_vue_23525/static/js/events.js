// destructuracion con JS
const { createApp } = Vue

createApp({
    data() {
      return {
        movies: [
          {
            title:'Mario Bros',
            rating:5,
          },
          {
            title:'The Flash',
            rating:2,
          },
          {
            title:'The Little Mermaid',
            rating:3,
          },
          {
            title:'Ruby Gillman, Teenage Kraken',
            rating:4,
          },          
        ],
        newTitle:'',
        newRating:0,
      }
    },
    methods:{
        addMovie(){
            let movieAux = {
                title: this.newTitle,
                rating: this.newRating
            }
            this.movies.push(movieAux);
        }
    }
}).mount('#app')